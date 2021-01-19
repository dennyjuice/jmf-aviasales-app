import { connect } from 'react-redux';
import { setSortTickets } from '../actions';
import SortButtons from '../components/sortButtons';
import { IState } from '../helpers/interfaces';

const mapStateToProps = (state: IState) => ({ sort: state.sortTickets });

const mapDispatchToProps = (dispatch: Function) => ({
  onChangeSort: (sort: string) => dispatch(setSortTickets(sort)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SortButtons);
