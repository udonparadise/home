import { Group } from './const';

export function stringToColor(name: string) {
  let color = '#';

  switch (name) {
    case Group.ANGE:
      color = '#FF85AD';
      break;
    case Group.BERRYZ:
      color = '#cf141b';
      break;
    case Group.BEYO:
      color = '#ba3cb8';
      break;
    case Group.HPK:
      color = '#33D6AD';
      break;
    case Group.HPKU:
      color = '#41b06c';
      break;
    case Group.JUICE:
      color = '#F90';
      break;
    case Group.ML:
      color = '#666';
      break;
    case Group.TSUBAKI:
      color = '#787FDC';
      break;
    case Group.KOBUSHI:
      color = '#F72F1F';
      break;
    default:
      color = '#0075C2';
  }

  return color;
}