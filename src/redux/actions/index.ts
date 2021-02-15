import {
  API_URL,
  SET_STOPS_FILTER,
  SET_SORT_TICKETS,
  RECEIVE_TICKETS,
  LOADED_TICKETS,
  SHOW_MORE_TICKETS,
  FETCH_ERROR,
} from '../../helpers/constants';
import { IAction, IFilterAction, ILoadAction, IOneTicket, IReceiveAction, ISortAction } from '../../helpers/interfaces';

export const setStopsFilter = (value: string, checked: boolean): IFilterAction => ({
  type: SET_STOPS_FILTER,
  value,
  checked,
});

export const setSortTickets = (sort: string): ISortAction => ({
  type: SET_SORT_TICKETS,
  sort,
});

export const receiveTickets = (isReceive: boolean): IReceiveAction => ({
  type: RECEIVE_TICKETS,
  isReceive,
});

export const loadedTickets = (tickets: IOneTicket[]): ILoadAction => ({
  type: LOADED_TICKETS,
  tickets,
});

export const fetchError = (): IAction => ({
  type: FETCH_ERROR,
});

export const showMoreTickets = () => ({
  type: SHOW_MORE_TICKETS,
});

export const fetchTickets = (searchId: string, curRetries = 0) => async (dispatch: Function): Promise<void> => {
  try {
    const res = await fetch(`${API_URL}/tickets?searchId=${searchId}`);
    const json = res.ok ? await res.json() : '';

    if (!res.ok) {
      const wait = 2 ** curRetries * 100;

      if (curRetries < 5) {
        setTimeout(() => {
          dispatch(fetchTickets(searchId, curRetries + 1));
        }, wait);
      } else {
        dispatch(receiveTickets(false));
        dispatch(fetchError());
      }
      return;
    }

    if (!json.stop) {
      dispatch(loadedTickets(json.tickets));
      dispatch(fetchTickets(searchId));
      return;
    }

    dispatch(loadedTickets(json.tickets));
    dispatch(receiveTickets(false));
  } catch (err) {
    dispatch(fetchError());
    dispatch(receiveTickets(false));
  }
};
