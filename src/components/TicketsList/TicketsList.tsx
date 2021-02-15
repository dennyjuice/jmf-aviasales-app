import React, { useEffect } from 'react';
import ContentLoader from 'react-content-loader';

import Ticket from '../Ticket';

import { ITickets, IOneTicket } from '../../helpers/interfaces';
import newId from '../../helpers/new-id';
import getSearchId from '../../helpers/getSearchId';

import classes from './TicketsList.module.scss';

const TicketsList: React.FC<ITickets> = ({
  ticketsList,
  loading,
  isError,
  fetchTickets,
  receiveTickets,
  showMoreTickets,
}: ITickets) => {
  useEffect(() => {
    receiveTickets(true);
    getSearchId().then((searchId) => fetchTickets(searchId));
  }, [fetchTickets, receiveTickets]);

  return (
    <ul className={classes.tickets}>
      {ticketsList.length === 0 && !isError && (
        <p className={classes.infoText}>Рейсов, подходящих под заданные фильтры, не найдено</p>
      )}

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

      {isError && <p className={classes.error}>Возникла непредвиденная ошибка</p>}

      {ticketsList.map((ticket: IOneTicket) => (
        <Ticket ticket={ticket} key={newId('tck')} />
      ))}

      {ticketsList.length !== 0 && (
        <button type="button" onClick={() => showMoreTickets()} className={classes.showMore}>
          Показать еще
        </button>
      )}
    </ul>
  );
};

export default TicketsList;
