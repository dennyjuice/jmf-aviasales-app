export const setStopsFilter = (filter: string) => ({
  type: 'SET_STOPS_FILTER',
  filter,
});

export const StopsFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_NO_STOPS: 'SHOW_NO_STOPS',
  SHOW_ONE_STOP: 'SHOW_ONE_STOP',
  SHOW_TWO_STOPS: 'SHOW_TWO_STOPS',
  SHOW_THREE_STOPS: 'SHOW_THREE_STOPS',
};
