import React from 'react';

import Ticket from '../ticket';

import { TicketsType } from '../../helpers/types';
import newId from '../../helpers/new-id';

import classes from './tickets-list.module.scss';

const TicketsList = ({ tickets }: TicketsType): JSX.Element => (
  <ul className={classes.tickets}>
    {tickets.map((ticket) => (
      // @ts-ignore
      <Ticket data={ticket} key={newId('tck')} />
    ))}
  </ul>
);

export default TicketsList;
