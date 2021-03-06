export interface IAction {
  type: string;
}

export interface IReceiveAction extends IAction {
  isReceive?: boolean;
}

export interface ILoadAction extends IReceiveAction {
  tickets: IOneTicket[];
}

export interface IFilterAction extends IAction {
  value: string;
  checked: boolean;
}

export interface ISortAction extends IAction {
  sort: string;
}

export interface ITickets {
  ticketsList: Array<IOneTicket>;
  loading: boolean;
  isError: boolean;
  fetchTickets: Function;
  receiveTickets: Function;
  showMoreTickets: Function;
  ticketsNumber?: number;
}

export interface IOneTicket {
  price: number;
  carrier: string;
  segments: Array<ITicketSegment>;
}

export interface ITicketSegment {
  origin: string;
  destination: string;
  date: string;
  stops: Array<string>;
  duration: number;
}

export interface IFilter {
  checkboxes: Array<any>;
  filter: string;
}

export interface IState {
  tickets: ITickets;
  stopsFilter: IFilter;
  sortTickets: string;
  loading: boolean;
  isError: boolean;
}

export interface IFilterLink {
  label: string;
  value: string;
  filterData: string;
  isChecked: boolean;
}
