import React, { useEffect } from 'react';

import Ticket from '../ticket';

import { ITickets, IOneTicket } from '../../helpers/types';
import newId from '../../helpers/new-id';

import classes from './ticketsList.module.scss';

const TicketsList: React.FC<ITickets> = ({ tickets, receiveTickets }: ITickets) => {
  useEffect(() => {
    receiveTickets();
  }, [receiveTickets]);

  return (
    <ul className={classes.tickets}>
      {tickets.map((ticket: IOneTicket) => (
        <Ticket ticket={ticket} key={newId('tck')} />
      ))}
    </ul>
  );
};

export default TicketsList;
