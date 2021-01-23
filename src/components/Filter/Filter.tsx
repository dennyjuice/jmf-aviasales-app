import React, { ChangeEvent } from 'react';

import { IFilterLink } from '../../helpers/interfaces';

import classes from './Filter.module.scss';

interface IFilterProps {
  checkboxes: any[];
  onChange: Function;
}

const Filter: React.FC<IFilterProps> = ({ checkboxes, onChange }: IFilterProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value, event.target.checked);
  };

  const fLinksElements = checkboxes.map((link: IFilterLink) => (
    <li key={link.value}>
      <input
        type="checkbox"
        id={link.value}
        name="transfer"
        value={link.value}
        checked={link.isChecked}
        onChange={handleChange}
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
