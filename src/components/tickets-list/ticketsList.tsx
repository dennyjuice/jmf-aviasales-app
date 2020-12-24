import React from 'react';

import Ticket from '../ticket';

import { TicketsType, TicketType } from '../../helpers/types';
import newId from '../../helpers/new-id';

import classes from './ticketsList.module.scss';

const TicketsList = ({ tickets }: TicketsType): JSX.Element => (
  <ul className={classes.tickets}>
    {tickets.map((ticket: TicketType) => (
      // @ts-ignore
      <Ticket data={ticket} key={newId('tck')} />
    ))}
  </ul>
);

export default TicketsList;
