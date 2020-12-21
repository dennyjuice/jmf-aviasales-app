import { combineReducers } from 'redux';
import tickets from './tickets';
import stopsFilter from './stops-filter';

export default combineReducers({
  tickets,
  stopsFilter,
});
