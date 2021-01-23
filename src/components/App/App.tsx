import React from 'react';

import FilterContainer from '../../redux/containers/FilterContainer';
import VisibleTickets from '../../redux/containers/VisibleTickets';
import SortContainer from '../../redux/containers/SortContainer';

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
