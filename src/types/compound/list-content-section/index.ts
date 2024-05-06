import type { PortableTextBlock } from '@portabletext/types';
import { IconEnum } from '@src/types/root';
import { SectionThemeEnum } from '../common';
interface ISectionHeading {
  subTitle?: string;
  title: string;
}

export interface IListContentCtaButton {
  buttonText: string;
  link: string;
  linkOpenNewTab: boolean;
}

export enum ListStyleEnum {
  None = 'none',
  Number = 'number',
  Icon = 'icon',
}

export interface IContentHead {
  sectionHeading: ISectionHeading;
  description: PortableTextBlock[];
}

export interface IListItem {
  title: string;
  description: PortableTextBlock[];
  icon?: IconEnum;
}

export interface IListContentSection {
  sectionTheme?: SectionThemeEnum;
  isDefaultBg: boolean;
  contentHeading: IContentHead;
  contentList: IListItem[];
  listStyle: ListStyleEnum;
  button?: IListContentCtaButton;
}
