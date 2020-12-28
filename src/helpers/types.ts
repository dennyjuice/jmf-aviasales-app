export interface Action {
  type: string;
  filter: string;
  value: string;
  checked: boolean;
}

export interface TicketsType {
  tickets: Array<TicketType>;
}

export interface TicketType {
  price: number;
  carrier: string;
  segments: Array<TicketSegmentType>;
}

export interface TicketSegmentType {
  origin: string;
  destination: string;
  date: string;
  stops: Array<string>;
  duration: number;
}

export interface FilterType {
  checkboxes: Array<any>;
  filter: string;
}

export interface StateType {
  tickets: Array<TicketType>;
  stopsFilter: FilterType;
}

export interface IFilterLink {
  label: string;
  value: string;
  filterData: string;
  isChecked: boolean;
}
