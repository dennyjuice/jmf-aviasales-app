export const setStopsFilter = (value: string, filter: string) => ({
  type: 'SET_STOPS_FILTER',
  filter,
  value,
});

export const StopsFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_NO_STOPS: 'SHOW_NO_STOPS',
  SHOW_ONE_STOP: 'SHOW_ONE_STOP',
  SHOW_TWO_STOPS: 'SHOW_TWO_STOPS',
  SHOW_THREE_STOPS: 'SHOW_THREE_STOPS',
};
