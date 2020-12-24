import React from 'react';

import FilterContainer from '../../containers/filterContainer';
import VisibleTickets from '../../containers/visibleTickets';

import classes from './App.module.scss';
import logo from './Logo.svg';

const App: React.FC = () => (
  <div className={classes.container}>
    <header>
      <img src={logo} className={classes.logo} alt="logo" />
    </header>
    <FilterContainer />
    <main>
      <div className={classes.tabs}>
        <button type="button" className={classes.active}>
          Самый дешевый
        </button>
        <button type="button">Самый быстрый</button>
      </div>
      <VisibleTickets />
    </main>
  </div>
);

export default App;
