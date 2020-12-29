import { connect } from 'react-redux';
import TicketsList from '../components/tickets-list';

import { StopsFilters, Sort } from '../actions';

import { IOneTicket, IState } from '../helpers/types';

const getVisibleTickets = (tickets: Array<IOneTicket>, filter: string, sort: string) => {
  const sortedTickets = tickets.sort((first, second) => {
    if (sort === Sort.CHEAPER) return first.price - second.price;

    if (sort === Sort.FASTER) {
      const firstDuration = first.segments[0].duration + first.segments[1].duration;
      const secondDuration = second.segments[0].duration + second.segments[1].duration;
      return firstDuration - secondDuration;
    }

    return 0;
  });

  switch (filter) {
    case StopsFilters.SHOW_ALL:
      return sortedTickets.slice(0, 5);
    default:
      return sortedTickets.slice(0, 5);
    // throw new Error(`Unknown filter: ${filter}`);
  }
};

const mapStateToProps = (state: IState) => ({
  tickets: getVisibleTickets(state.tickets, state.stopsFilter.filter, state.sortTickets),
});

export default connect(mapStateToProps)(TicketsList);
