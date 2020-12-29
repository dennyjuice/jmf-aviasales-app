import { StopsFilters } from '../actions';

import { Action } from '../helpers/types';

enum CheckBoxes {
  ALL = 'all',
  NONE = 'none',
  ONE = 'one',
  TWO = 'two',
  THREE = 'three',
}

const defaultState = {
  checkboxes: [
    { value: CheckBoxes.ALL, label: 'Все', filterData: StopsFilters.SHOW_ALL, isChecked: false },
    { value: CheckBoxes.NONE, label: 'Без пересадок', filterData: StopsFilters.SHOW_NO_STOPS, isChecked: true },
    { value: CheckBoxes.ONE, label: '1 пересадка', filterData: StopsFilters.SHOW_ONE_STOP, isChecked: false },
    { value: CheckBoxes.TWO, label: '2 пересадки', filterData: StopsFilters.SHOW_TWO_STOPS, isChecked: false },
    { value: CheckBoxes.THREE, label: '3 пересадки', filterData: StopsFilters.SHOW_THREE_STOPS, isChecked: false },
  ],
  filter: StopsFilters.SHOW_ALL,
};

const checkboxCheck = (checkboxes: Array<any>, value?: string, checked?: boolean): Array<any> => {
  if (value === CheckBoxes.ALL) {
    return checkboxes.map((checkbox) => ({ ...checkbox, isChecked: checked }));
  }

  const checkedArr = checkboxes.map((checkbox) => {
    if (value === checkbox.value) {
      return { ...checkbox, isChecked: checked };
    }
    return { ...checkbox };
  });

  checkedArr[0].isChecked = checkedArr.filter((el) => el.isChecked && el.value !== CheckBoxes.ALL).length === 4;

  return checkedArr;
};

const StopsFilter = (state = defaultState, action: Action) => {
  switch (action.type) {
    case 'SET_STOPS_FILTER':
      return {
        ...state,
        checkboxes: checkboxCheck(state.checkboxes, action.value, action.checked),
        filter: action.filter,
      };
    default:
      return state;
  }
};

export default StopsFilter;
