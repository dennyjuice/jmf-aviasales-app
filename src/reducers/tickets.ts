import ticketsData from '../tickets.json';

import { Action } from '../helpers/types';

const tickets = (state = ticketsData.tickets, action: Action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default tickets;
