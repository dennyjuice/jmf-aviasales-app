import React from 'react';
import { Sort } from '../../helpers/constants';

import classes from './SortButtons.module.scss';

interface ISortButtonsProps {
  sort: string;
  onChangeSort: Function;
}

const SortButtons: React.FC<ISortButtonsProps> = ({ sort, onChangeSort }: ISortButtonsProps) => (
  <div className={classes.tabs}>
    <button
      type="button"
      onClick={() => onChangeSort(Sort.CHEAPER)}
      className={(sort === Sort.CHEAPER && classes.active) || ''}
    >
      Самый дешевый
    </button>
    <button
      type="button"
      onClick={() => onChangeSort(Sort.FASTER)}
      className={(sort === Sort.FASTER && classes.active) || ''}
    >
      Самый быстрый
    </button>
  </div>
);

export default SortButtons;
