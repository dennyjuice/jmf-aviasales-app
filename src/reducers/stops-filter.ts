import { StopsFilters } from '../actions';

import { Action } from '../helpers/types';

const StopsFilter = (state = StopsFilters.SHOW_ALL, action: Action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
};

export default StopsFilter;
