import React from 'react';

import classes from './ticket.module.scss';

interface ITicketProps {
  price: string;
}

const Ticket = ({ price }: ITicketProps): JSX.Element => (
  <li className={classes.ticket}>
    <div className={classes['ticket-header']}>
      <div className={classes.price}>{price} Р</div>
      <div className={classes['company-logo']}>
        <img src="//pics.avs.io/99/36/S7.png" alt="companyLogo" />
      </div>
    </div>
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
  </li>
);

export default Ticket;
