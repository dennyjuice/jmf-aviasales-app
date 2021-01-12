import { IRequestAction } from '../helpers/types';

const defaultState = {
  ticketsList: [],
  loading: false,
};

const tickets = (state = defaultState, action: IRequestAction) => {
  switch (action.type) {
    case 'RECEIVE_TICKETS':
      return {
        ...state,
        loading: true,
      };

    case 'LOADED_TICKETS':
      return {
        ticketsList: action.tickets,
        loading: false,
      };
    default:
      return state;
  }
};

export default tickets;
