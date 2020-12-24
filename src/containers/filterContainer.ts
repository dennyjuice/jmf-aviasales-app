import { connect } from 'react-redux';
import { setStopsFilter } from '../actions';
import Filter from '../components/filter';
import { StateType } from '../helpers/types';

const mapStateToProps = (state: StateType) => ({
  checkboxes: state.stopsFilter.checkboxes,
});

const mapDispatchToProps = (dispatch: Function) => ({
  onChange: (value: string, filterData: string) => dispatch(setStopsFilter(value, filterData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
