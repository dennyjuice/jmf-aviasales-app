import React from 'react';

import { IOneTicket, ITicketSegment } from '../../helpers/interfaces';
import newId from '../../helpers/new-id';

import classes from './Ticket.module.scss';

interface ITicketProps {
  ticket: IOneTicket;
}

const formatStops = (stops: number): string => {
  if (stops === 0) return `${stops} пересадок`;
  return stops === 1 ? `${stops} пересадка` : `${stops} пересадки`;
};

const formatDuration = (duration: number): string => {
  const hours = Math.trunc(duration / 60);
  const minutes = duration % 60;
  return `${hours}ч ${minutes}м`;
};

const formatDate = (dateStr: string, duration: number): string => {
  const date = new Date(dateStr);
  const arrivalDate = new Date(date.getTime() + duration * 60000);
  const depTime = `${date.getHours()}:${date.getMinutes()}`;
  const arrTime = `${arrivalDate.getHours()}:${arrivalDate.getMinutes()}`;
  return `${depTime} - ${arrTime}`;
};

const Ticket: React.FC<ITicketProps> = ({ ticket }: ITicketProps) => (
  <li className={classes.ticket}>
    <div className={classes['ticket-header']}>
      <div className={classes.price}>{ticket.price} Р</div>
      <div className={classes['company-logo']}>
        <img src={`//pics.avs.io/99/36/${ticket.carrier}.png`} alt="companyLogo" />
      </div>
    </div>
    {ticket.segments.map((item: ITicketSegment) => (
      <div className={classes['ticket-direction']} key={newId('seg')}>
        <div className={classes['ticket-info-block']}>
          <span className={classes['ticket-info-block_head']}>{`${item.origin} - ${item.destination}`}</span>
          <br />
          <span className={classes['ticket-info-block_desc']}>{formatDate(item.date, item.duration)}</span>
        </div>
        <div className={classes['ticket-info-block']}>
          <span className={classes['ticket-info-block_head']}>В пути</span>
          <br />
          <span className={classes['ticket-info-block_desc']}>{formatDuration(item.duration)}</span>
        </div>
        <div className={classes['ticket-info-block']}>
          <span className={classes['ticket-info-block_head']}>{formatStops(item.stops.length)}</span>
          <br />
          <span className={classes['ticket-info-block_desc']}>{item.stops.join(', ')}</span>
        </div>
      </div>
    ))}
  </li>
);

export default Ticket;
