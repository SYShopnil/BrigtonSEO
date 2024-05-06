import { SectionThemeEnum } from '../common';

interface ISectionHeading {
  subTitle: string;
  title: string;
}

export interface IImageAccordionCard {
  image: string;
  title: string;
  link: string;
  description: string;
}

export interface IImageAccordion {
  sectionHeading: ISectionHeading;
  cards: IImageAccordionCard[];
  sectionTheme: SectionThemeEnum;
}
