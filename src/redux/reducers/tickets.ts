import { ILoadAction } from '../../helpers/interfaces';
import { FETCH_ERROR, LOADED_TICKETS, RECEIVE_TICKETS, SHOW_MORE_TICKETS } from '../../helpers/constants';

const defaultState = {
  ticketsList: [],
  loading: false,
  ticketsNumber: 5,
  isError: false,
};

const tickets = (state = defaultState, action: ILoadAction) => {
  switch (action.type) {
    case RECEIVE_TICKETS:
      return {
        ...state,
        loading: action.isReceive,
      };

    case LOADED_TICKETS:
      return {
        ticketsList: [...state.ticketsList, ...action.tickets],
        loading: state.loading,
        ticketsNumber: state.ticketsNumber,
      };

    case SHOW_MORE_TICKETS:
      return {
        ...state,
        ticketsNumber: state.ticketsNumber + 5,
      };

    case FETCH_ERROR:
      return {
        ...state,
        isError: true,
      };

    default:
      return state;
  }
};

export default tickets;
