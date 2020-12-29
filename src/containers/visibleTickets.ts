import { connect } from 'react-redux';
import TicketsList from '../components/tickets-list';

import { StopsFilters } from '../actions';

import { IOneTicket, IState } from '../helpers/types';

const getVisibleTickets = (tickets: Array<IOneTicket>, filter: string) => {
  switch (filter) {
    case StopsFilters.SHOW_ALL:
      return tickets.slice(0, 5);
    default:
      return tickets.slice(0, 5);
    // throw new Error(`Unknown filter: ${filter}`);
  }
};

const mapStateToProps = (state: IState) => ({
  tickets: getVisibleTickets(state.tickets, state.stopsFilter.filter),
});

export default connect(mapStateToProps)(TicketsList);
