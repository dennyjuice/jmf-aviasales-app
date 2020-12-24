import { StopsFilters } from '../actions';

import { Action } from '../helpers/types';

enum CheckBoxes {
  'all',
  'none',
  'one',
  'two',
  'three',
}

const defaultState = {
  checkboxes: [
    { value: 'all', label: 'Все', filterData: StopsFilters.SHOW_ALL, isChecked: false },
    { value: 'none', label: 'Без пересадок', filterData: StopsFilters.SHOW_NO_STOPS, isChecked: true },
    { value: 'one', label: '1 пересадка', filterData: StopsFilters.SHOW_ONE_STOP, isChecked: false },
    { value: 'two', label: '2 пересадки', filterData: StopsFilters.SHOW_TWO_STOPS, isChecked: false },
    { value: 'three', label: '3 пересадки', filterData: StopsFilters.SHOW_THREE_STOPS, isChecked: false },
  ],
  filter: StopsFilters.SHOW_ALL,
};

const StopsFilter = (state = defaultState, action: Action) => {
  switch (action.type) {
    case 'SET_STOPS_FILTER':
      // eslint-disable-next-line no-case-declarations
      const chbx = state.checkboxes;
      if (action.value === chbx[CheckBoxes.all].value) {
        const newCheckboxes = chbx.map((checkbox) => {
          if (!chbx[CheckBoxes.all].isChecked) {
            return { ...checkbox, isChecked: true };
          }
          return { ...checkbox, isChecked: false };
        });
        return { ...state, checkboxes: newCheckboxes, filter: action.filter };
      }

      return { ...state, filter: action.filter };
    default:
      return state;
  }
};

export default StopsFilter;
