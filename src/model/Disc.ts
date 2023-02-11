export type disc = {
  artist: string;
  disc: discInfo[];
};

export type discInfo = {
  name: string;
  year: number;
  doNotHave?: boolean;
};
