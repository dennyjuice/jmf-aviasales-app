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
      <label>
        <input type="checkbox" name="transfer" value="all" />
        Все
      </label>
      <label>
        <input type="checkbox" name="transfer" value="none" />
        Без пересадок
      </label>
      <label>
        <input type="checkbox" name="transfer" value="1" />1 пересадка
      </label>
      <label>
        <input type="checkbox" name="transfer" value="2" />2 пересадки
      </label>
      <label>
        <input type="checkbox" name="transfer" value="3" />3 пересадки
      </label>
    </section>
    <main>
      <nav>
        <button type="button">Самый дешевый</button>
        <button type="button">Самый быстрый</button>
      </nav>
      <div className={classes.tickets}>
        <div className={classes.ticket}>
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
        </div>
      </div>
    </main>
  </div>
);

export default App;
