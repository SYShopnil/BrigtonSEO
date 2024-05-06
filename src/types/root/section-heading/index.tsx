export enum SectionHeadingColorschemesEnum {
  Blue = 'blue',
  Skyblue = 'skyblue',
  White = 'white',
  Black = 'black',
}

export interface ISectionHeading {
  title: string;
  isCenter: boolean;
  colorScheme: SectionHeadingColorschemesEnum;
  hasBottomSpacing: boolean;
  subTitle?: string;
  description?: string;
}
