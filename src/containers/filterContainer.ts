import { connect } from 'react-redux';
import { setStopsFilter } from '../actions';
import Filter from '../components/filter';
import { IState } from '../helpers/types';

const mapStateToProps = (state: IState) => ({
  checkboxes: state.stopsFilter.checkboxes,
});

const mapDispatchToProps = (dispatch: Function) => ({
  onChange: (value: string, checked: boolean, filterData: string) =>
    dispatch(setStopsFilter(value, checked, filterData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
