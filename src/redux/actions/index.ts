import { API_URL, SET_STOPS_FILTER, SET_SORT_TICKETS, RECEIVE_TICKETS, LOADED_TICKETS } from '../../helpers/constants';
import { IFilterAction, ILoadAction, IOneTicket, IReceiveAction, ISortAction } from '../../helpers/interfaces';

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

export const fetchTickets = (searchId: string) => async (dispatch: Function): Promise<void> => {
  try {
    const res = await fetch(`${API_URL}/tickets?searchId=${searchId}`);
    const json = res.ok ? await res.json() : '';

    if (!res.ok) {
      dispatch(fetchTickets(searchId));
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
    // eslint-disable-next-line consistent-return
    return err;
  }
};
