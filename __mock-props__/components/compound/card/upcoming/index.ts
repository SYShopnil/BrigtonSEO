import {
  IUpcomingCard,
  UpcomingCardThemeEnum,
} from '@src/types/compound/card/upcoming';

export const upcomingCardData: IUpcomingCard = {
  buttonTitle: 'Add To Calendar',
  date: {
    startDate: 1,
    isOneDay: true,
    month: 'October',
    year: 2022,
  },
  theme: UpcomingCardThemeEnum.themeOne,
  location: 'The Brighton Centre',
  eventNumber: 26,
};
