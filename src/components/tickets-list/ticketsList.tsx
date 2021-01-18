import React, { useEffect } from 'react';
import ContentLoader from 'react-content-loader';

import Ticket from '../ticket';

import { ITickets, IOneTicket } from '../../helpers/types';
import newId from '../../helpers/new-id';
import getSearchId from '../../helpers/getSearchId';

import classes from './ticketsList.module.scss';

const TicketsList: React.FC<ITickets> = ({ ticketsList, loading, receiveTickets }: ITickets) => {
  useEffect(() => {
    getSearchId().then((searchId) => receiveTickets(searchId));
  }, [receiveTickets]);

  return (
    <ul className={classes.tickets}>
      {loading && (
        <ContentLoader
          speed={1}
          width={500}
          height={188}
          viewBox="0 0 500 188"
          backgroundColor="#F3F7FA"
          foregroundColor="#ECECEC"
          className={classes.loader}
        >
          <rect x="0" y="0" rx="5" ry="5" width="500" height="188" />
        </ContentLoader>
      )}
      {ticketsList.map((ticket: IOneTicket) => (
        <Ticket ticket={ticket} key={newId('tck')} />
      ))}
    </ul>
  );
};

export default TicketsList;
