import { IEventDate } from '../../common';

export interface IUpcomingCard extends IEventDate {
  theme: UpcomingCardThemeEnum;
  location: string;
  buttonTitle: string;
  eventNumber: number;
}
export enum UpcomingCardThemeEnum {
  themeOne = 'theme-1',
  themeTwo = 'theme-2',
  themeThree = 'theme-3',
}
