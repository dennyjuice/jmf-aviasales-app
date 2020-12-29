import React from 'react';
import { Sort } from '../../actions';

import classes from './sortButtons.module.scss';

const SortButtons = ({ sort, onChangeSort }: any) => (
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
