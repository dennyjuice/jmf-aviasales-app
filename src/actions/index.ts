import { API_URL } from '../helpers/constants';

export const setStopsFilter = (value: string, checked: boolean) => ({
  type: 'SET_STOPS_FILTER',
  value,
  checked,
});

export const setSortTickets = (sort: string) => ({
  type: 'SET_SORT_TICKETS',
  sort,
});

export const receiveTickets = (isReceive: boolean) => ({
  type: 'RECEIVE_TICKETS',
  isReceive,
});

export const loadedTickets = (tickets: any) => ({
  type: 'LOADED_TICKETS',
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

    if (json.stop) {
      dispatch(loadedTickets(json.tickets));
      dispatch(receiveTickets(false));
      return;
    }
  } catch (err) {
    // eslint-disable-next-line consistent-return
    return err;
  }
};
