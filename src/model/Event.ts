export type event = {
  month: number;
  day: number;
  group: string;
  name: string;
  member?: string;
  site?: string;
  time?: string;
  note?: string;
};

export type eventItem = {
  year: number;
  data: event[];
};
