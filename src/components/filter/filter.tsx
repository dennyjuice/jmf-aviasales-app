import React from 'react';

import classes from './filter.module.scss';

const Filter: React.FC = () => (
  <section className={classes.filter}>
    <span className={classes['filter-header']}>Количество пересадок</span>
    <ul>
      <li>
        <input type="checkbox" id="all" name="transfer" value="all" />
        <label htmlFor="all"> Все</label>
      </li>
      <li>
        <input type="checkbox" id="none" name="transfer" value="none" />
        <label htmlFor="none"> Без пересадок</label>
      </li>
      <li>
        <input type="checkbox" id="one" name="transfer" value="1" />
        <label htmlFor="one">1 пересадка</label>
      </li>
      <li>
        <input type="checkbox" id="two" name="transfer" value="2" />
        <label htmlFor="two">2 пересадки</label>
      </li>
      <li>
        <input type="checkbox" id="three" name="transfer" value="3" />
        <label htmlFor="three">3 пересадки</label>
      </li>
    </ul>
  </section>
);

export default Filter;
