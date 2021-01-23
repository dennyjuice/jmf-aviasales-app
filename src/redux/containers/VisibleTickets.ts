import { connect } from 'react-redux';
import TicketsList from '../../components/TicketsList';

import { Sort } from '../../helpers/constants';
import { fetchTickets, receiveTickets, showMoreTickets } from '../actions';

import { IOneTicket, IState } from '../../helpers/interfaces';

const getVisibleTickets = (
  tickets: Array<IOneTicket>,
  checkboxes: any[],
  sort: string,
  ticketsNumber: number | undefined,
) => {
  const sortedTickets = tickets.sort((first, second) => {
    if (sort === Sort.CHEAPER) return first.price - second.price;

    if (sort === Sort.FASTER) {
      const firstDuration = first.segments[0].duration + first.segments[1].duration;
      const secondDuration = second.segments[0].duration + second.segments[1].duration;
      return firstDuration - secondDuration;
    }

    return 0;
  });

  const filterTickets = sortedTickets.filter((ticket: IOneTicket) => {
    const transNum = ticket.segments[0].stops.length;
    return (
      (transNum === 0 && checkboxes[1].isChecked) ||
      (transNum === 1 && checkboxes[2].isChecked) ||
      (transNum === 2 && checkboxes[3].isChecked) ||
      (transNum === 3 && checkboxes[4].isChecked)
    );
  });

  return filterTickets.slice(0, ticketsNumber);
};

const mapStateToProps = (state: IState) => ({
  ticketsList: getVisibleTickets(
    state.tickets.ticketsList,
    state.stopsFilter.checkboxes,
    state.sortTickets,
    state.tickets.ticketsNumber,
  ),
  loading: state.tickets.loading,
});

const mapDispatchToProps = (dispatch: Function) => ({
  fetchTickets: (searchId: string) => dispatch(fetchTickets(searchId)),
  receiveTickets: (isLoading: boolean) => dispatch(receiveTickets(isLoading)),
  showMoreTickets: () => dispatch(showMoreTickets()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TicketsList);
