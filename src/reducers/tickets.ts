import { IRequestAction } from '../helpers/interfaces';

const defaultState = {
  ticketsList: [],
  loading: false,
};

const tickets = (state = defaultState, action: IRequestAction) => {
  switch (action.type) {
    case 'RECEIVE_TICKETS':
      return {
        ...state,
        loading: action.isReceive,
      };

    case 'LOADED_TICKETS':
      return {
        ticketsList: [...state.ticketsList, ...action.tickets],
        loading: state.loading,
      };
    default:
      return state;
  }
};

export default tickets;
