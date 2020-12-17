import React from 'react';

import classes from './App.module.scss';
import logo from './Logo.svg';

const App = () => (
  <div className={classes.container}>
    <header>
      <img src={logo} className={classes.logo} alt="logo" />
    </header>
    <section className={classes.filter}>
      <span className={classes['filter-header']}>Количество пересадок</span>
      <ul>
        <li>
          <input type="checkbox" name="transfer" value="all" />
          <label htmlFor="transfer"> Все</label>
        </li>
        <li>
          <input type="checkbox" name="transfer" value="none" defaultChecked />
          <label htmlFor="transfer"> Без пересадок</label>
        </li>
        <li>
          <input type="checkbox" name="transfer" value="1" />
          <label htmlFor="transfer">1 пересадка</label>
        </li>
        <li>
          <input type="checkbox" name="transfer" value="2" />
          <label htmlFor="transfer">2 пересадки</label>
        </li>
        <li>
          <input type="checkbox" name="transfer" value="3" />
          <label htmlFor="transfer">3 пересадки</label>
        </li>
      </ul>
    </section>
    <main>
      <div className={classes.tabs}>
        <button type="button">Самый дешевый</button>
        <button type="button">Самый быстрый</button>
      </div>
      <ul className={classes.tickets}>
        <li className={classes.ticket}>
          <div className={classes['ticket-header']}>
            <div className={classes.price}>13 400 Р</div>
            <div className={classes['company-logo']}>
              <img src="//pics.avs.io/99/36/S7.png" alt="companyLogo" />
            </div>
          </div>
          <div className={classes['ticket-info']}>
            <div className={classes['ticket-direction']}>
              <div className={classes['ticket-info-block']}>
                <span className={classes['ticket-info-block_head']}>MOW – HKT</span>
                <br />
                <span className={classes['ticket-info-block_desc']}>10:45 – 08:00</span>
              </div>
              <div className={classes['ticket-info-block']}>
                <span className={classes['ticket-info-block_head']}>В пути</span>
                <br />
                <span className={classes['ticket-info-block_desc']}>21ч 15м</span>
              </div>
              <div className={classes['ticket-info-block']}>
                <span className={classes['ticket-info-block_head']}>2 пересадки</span>
                <br />
                <span className={classes['ticket-info-block_desc']}>HKG, JNB</span>
              </div>
            </div>
            <div className={classes['ticket-direction']}>
              <div className={classes['ticket-info-block']}>
                <span className={classes['ticket-info-block_head']}>HKT – MOV</span>
                <br />
                <span className={classes['ticket-info-block_desc']}>11:20 – 00:50</span>
              </div>
              <div className={classes['ticket-info-block']}>
                <span className={classes['ticket-info-block_head']}>В пути</span>
                <br />
                <span className={classes['ticket-info-block_desc']}>13ч 30м</span>
              </div>
              <div className={classes['ticket-info-block']}>
                <span className={classes['ticket-info-block_head']}>1 пересадка</span>
                <br />
                <span className={classes['ticket-info-block_desc']}>HKG</span>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </main>
  </div>
);

export default App;
