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

export const receiveTickets = () => ({
  type: 'RECEIVE_TICKETS',
});

export const loadedTickets = (tickets: any) => ({
  type: 'LOADED_TICKETS',
  tickets,
});

const getSearchId = () =>
  fetch('https://front-test.beta.aviasales.ru/search')
    .then((response) => response.json())
    .then((json) => json.searchId);

export const fetchTickets = () => (dispatch: Function): void => {
  dispatch(receiveTickets());
  getSearchId().then((searchId) => {
    fetch(`https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`)
      .then((response) => response.json())
      .then((json) => dispatch(loadedTickets(json.tickets)));
  });
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
