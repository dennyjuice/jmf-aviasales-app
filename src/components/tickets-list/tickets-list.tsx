import React from 'react';

import Ticket from '../ticket';

import classes from './tickets-list.module.scss';

const TicketsList: React.FC = () => (
  <ul className={classes.tickets}>
    <Ticket price="13 400" key={1} />
    <Ticket price="16 900" key={2} />
    <Ticket price="6 300" key={3} />
    <Ticket price="34 900" key={4} />
    <Ticket price="11 200" key={5} />
  </ul>
);

export default TicketsList;
