import { Group } from './const';

export function stringToColor(name: string) {
  let color = '#';

  switch (name) {
    case Group.MM:
      color = '#E5457D';
      break;
    case Group.BERRYZ:
      color = '#AD85AD';
      break;
    case Group.CUTE:
      color = '#34B3E8';
      break;
    case Group.ANGE:
      color = '#FF85AD';
      break;
    case Group.JUICE:
      color = '#F90';
      break;
    case Group.CG:
      color = '#56BF00';
      break;
    case Group.KOBUSHI:
      color = '#F72F1F';
      break;
    case Group.TSUBAKI:
      color = '#787FDC';
      break;
    case Group.BEYO:
      color = '#ba3cb8';
      break;
    case Group.OCHA:
      color = '#41b06c';
      break;
    case Group.ROSY:
      color = '#bf3b3b';
      break;
    case Group.HPK:
    case Group.HPKU:
      color = '#33D6AD';
      break;
    default:
      color = '#0075C2';
  }

  return color;
}
