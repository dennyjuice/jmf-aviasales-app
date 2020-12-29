import { IRequestAction } from '../helpers/types';

const tickets = (state = [], action: IRequestAction) => {
  switch (action.type) {
    case 'RECEIVE_TICKETS':
      return action.tickets;
    default:
      return state;
  }
};

export default tickets;
