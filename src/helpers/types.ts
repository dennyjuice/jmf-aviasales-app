export interface Action {
  type: string;
  filter: string;
  value: string;
  checked: boolean;
}

export interface ITickets {
  tickets: Array<IOneTicket>;
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
  tickets: Array<IOneTicket>;
  stopsFilter: IFilter;
}

export interface IFilterLink {
  label: string;
  value: string;
  filterData: string;
  isChecked: boolean;
}
