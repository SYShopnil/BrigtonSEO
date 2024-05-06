import { IEventInfo } from '../../common';

export enum EventInfoThemeEnum {
  Theme1 = 'theme-1',
  Theme2 = 'theme-2',
  Theme3 = 'theme-3',
}

export interface IInfoCount {
  number: number;
  title: string;
  isExact: boolean;
  theme: EventInfoThemeEnum;
}

export interface IHeroLogo {
  title: string;
  image: {
    url: string;
    width: number;
    height: number;
  };
}

export interface IHeroHome {
  hasVector: boolean;
  bgVideoUrl: string;
  title: string;
  subTitle?: string;
  description?: string;
  eventInfo?: IEventInfo;
  infoCount?: IInfoCount[];
  logo?: IHeroLogo;
}
