import { ISortAction } from '../../helpers/interfaces';
import { SET_SORT_TICKETS, Sort } from '../../helpers/constants';

const sortTickets = (state = Sort.CHEAPER, action: ISortAction) => {
  switch (action.type) {
    case SET_SORT_TICKETS:
      return action.sort;
    default:
      return state;
  }
};

export default sortTickets;
