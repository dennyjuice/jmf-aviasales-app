import { IFilterAction } from '../helpers/interfaces';

enum CheckBoxes {
  ALL = 'all',
  NONE = 'none',
  ONE = 'one',
  TWO = 'two',
  THREE = 'three',
}

const defaultState = {
  checkboxes: [
    { value: CheckBoxes.ALL, label: 'Все', isChecked: false },
    { value: CheckBoxes.NONE, label: 'Без пересадок', isChecked: true },
    { value: CheckBoxes.ONE, label: '1 пересадка', isChecked: false },
    { value: CheckBoxes.TWO, label: '2 пересадки', isChecked: false },
    { value: CheckBoxes.THREE, label: '3 пересадки', isChecked: false },
  ],
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

const StopsFilter = (state = defaultState, action: IFilterAction) => {
  switch (action.type) {
    case 'SET_STOPS_FILTER':
      return {
        ...state,
        checkboxes: checkboxCheck(state.checkboxes, action.value, action.checked),
      };
    default:
      return state;
  }
};

export default StopsFilter;
