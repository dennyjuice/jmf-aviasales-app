import { connect } from 'react-redux';
import { setStopsFilter } from '../actions';
import Filter from '../components/filter';
import { IState } from '../helpers/interfaces';

const mapStateToProps = (state: IState) => ({
  checkboxes: state.stopsFilter.checkboxes,
});

const mapDispatchToProps = (dispatch: Function) => ({
  onChange: (value: string, checked: boolean) => dispatch(setStopsFilter(value, checked)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
