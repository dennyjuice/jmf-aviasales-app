import React, { useEffect } from 'react';

import Ticket from '../ticket';

import { ITickets, IOneTicket } from '../../helpers/types';
import newId from '../../helpers/new-id';

import classes from './ticketsList.module.scss';

const TicketsList = ({ tickets, receiveTickets }: ITickets): JSX.Element => {
  useEffect(() => {
    receiveTickets();
  }, [receiveTickets]);

  return (
    <ul className={classes.tickets}>
      {tickets.map((ticket: IOneTicket) => (
        // @ts-ignore
        <Ticket data={ticket} key={newId('tck')} />
      ))}
    </ul>
  );
};

export default TicketsList;
