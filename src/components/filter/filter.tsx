import React from 'react';

import { IFilterLink } from '../../helpers/types';

import classes from './filter.module.scss';
// import { StopsFilters } from '../../actions';

const Filter = ({ checkboxes, onChange }: any) => {
  // eslint-disable-next-line no-console
  console.log(checkboxes);
  const fLinksElements = checkboxes.map((link: IFilterLink) => (
    <li key={link.value}>
      <input
        type="checkbox"
        id={link.value}
        name="transfer"
        value={link.value}
        checked={link.isChecked}
        onChange={() => onChange(link.value, link.filterData)}
      />
      <label htmlFor={link.value}> {link.label}</label>
    </li>
  ));

  return (
    <section className={classes.filter}>
      <span className={classes['filter-header']}>Количество пересадок</span>
      <ul>{fLinksElements}</ul>
    </section>
  );
};

export default Filter;
