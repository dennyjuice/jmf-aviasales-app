import React from 'react';

import { ITicketSegment } from '../../helpers/types';
import newId from '../../helpers/new-id';

import classes from './ticket.module.scss';

const Ticket: React.FC = ({ data }: any) => (
  <li className={classes.ticket}>
    <div className={classes['ticket-header']}>
      <div className={classes.price}>{data.price} Р</div>
      <div className={classes['company-logo']}>
        <img src={`//pics.avs.io/99/36/${data.carrier}.png`} alt="companyLogo" />
      </div>
    </div>
    {data.segments.map((item: ITicketSegment) => (
      <div className={classes['ticket-direction']} key={newId('seg')}>
        <div className={classes['ticket-info-block']}>
          <span className={classes['ticket-info-block_head']}>{`${item.origin} - ${item.destination}`}</span>
          <br />
          <span className={classes['ticket-info-block_desc']}>10:45 – 08:00</span>
        </div>
        <div className={classes['ticket-info-block']}>
          <span className={classes['ticket-info-block_head']}>В пути</span>
          <br />
          <span className={classes['ticket-info-block_desc']}>{item.duration}</span>
        </div>
        <div className={classes['ticket-info-block']}>
          <span className={classes['ticket-info-block_head']}>{`${item.stops.length} пересадки`}</span>
          <br />
          <span className={classes['ticket-info-block_desc']}>{item.stops.join(', ')}</span>
        </div>
      </div>
    ))}
  </li>
);

export default Ticket;
