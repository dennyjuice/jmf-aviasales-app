import React from 'react';

import FilterContainer from '../../containers/filterContainer';
import VisibleTickets from '../../containers/visibleTickets';
import SortContainer from '../../containers/sortContainer';

import classes from './App.module.scss';
import logo from './Logo.svg';

const App: React.FC = () => (
  <div className={classes.container}>
    <header>
      <img src={logo} className={classes.logo} alt="logo" />
    </header>
    <FilterContainer />
    <main>
      <SortContainer />
      <VisibleTickets />
    </main>
  </div>
);

export default App;
