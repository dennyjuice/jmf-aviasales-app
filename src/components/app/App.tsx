import React from 'react';

import Filter from '../filter';
import TicketsList from '../tickets-list';

import classes from './App.module.scss';
import logo from './Logo.svg';

const App: React.FC = () => (
  <div className={classes.container}>
    <header>
      <img src={logo} className={classes.logo} alt="logo" />
    </header>
    <Filter />
    <main>
      <div className={classes.tabs}>
        <button type="button" className={classes.active}>
          Самый дешевый
        </button>
        <button type="button">Самый быстрый</button>
      </div>
      <TicketsList />
    </main>
  </div>
);

export default App;
