export type Action = {
  type: string;
  filter: string;
  value: string;
};

export type TicketsType = {
  tickets: Array<TicketType>;
};

export type TicketType = {
  price: number;
  carrier: string;
  segments: Array<TicketSegmentType>;
};

export type TicketSegmentType = {
  origin: string;
  destination: string;
  date: string;
  stops: Array<string>;
  duration: number;
};

export type FilterType = {
  checkboxes: Array<any>;
  filter: string;
};

export type StateType = {
  tickets: Array<TicketType>;
  stopsFilter: FilterType;
};

export type IFilterLink = {
  label: string;
  value: string;
  filterData: string;
  isChecked: boolean;
};
