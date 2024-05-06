export interface IEventDate {
  date: {
    startDate: number;
    isOneDay: boolean;
    month: string;
    year: number;
  };
}

export interface IEventInfo extends IEventDate {
  location: {
    name: string;
    googleMapUrl: string;
  };
}

export interface IAuthor {
  author: {
    imageUrl?: string;
    name: string;
    designation: string;
  };
}

export enum UserIconSizeEnum {
  width = 96,
  height = 96,
}

export enum SectionThemeEnum {
  Blue = 'blue',
  Skyblue = 'skyblue',
}
