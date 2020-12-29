import { combineReducers } from 'redux';
import tickets from './tickets';
import stopsFilter from './stopsFilter';
import sortTickets from './sortTickets';

export default combineReducers({
  tickets,
  stopsFilter,
  sortTickets,
});
