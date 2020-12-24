import { combineReducers } from 'redux';
import tickets from './tickets';
import stopsFilter from './stopsFilter';

export default combineReducers({
  tickets,
  stopsFilter,
});
