export const setStopsFilter = (value: string, checked: boolean, filter: string) => ({
  type: 'SET_STOPS_FILTER',
  filter,
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
  dispatch(receiveTickets(true));

  try {
    const res = await fetch(`https://aviasales-test-api.java-mentor.com/tickets?searchId=${searchId}`);
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
  } catch (err) {
    return;
  }

  dispatch(receiveTickets(false));
};

export enum StopsFilters {
  SHOW_ALL = 'SHOW_ALL',
  SHOW_NO_STOPS = 'SHOW_NO_STOPS',
  SHOW_ONE_STOP = 'SHOW_ONE_STOP',
  SHOW_TWO_STOPS = 'SHOW_TWO_STOPS',
  SHOW_THREE_STOPS = 'SHOW_THREE_STOPS',
}

export enum Sort {
  CHEAPER = 'SORT_CHEAPER',
  FASTER = 'SORT_FASTER',
}
