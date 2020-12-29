import ticketsData from '../tickets.json';

import { IFilterAction } from '../helpers/types';

const tickets = (state = ticketsData.tickets, action: IFilterAction) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default tickets;
