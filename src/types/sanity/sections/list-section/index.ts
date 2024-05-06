import { ListStyleEnum, IListItem } from '@src/types/compound';
import type { PortableTextBlock } from '@portabletext/types';
import { ISanityCTA, ISanitySectionTheme } from './../../general/index';

export interface ISanityListSection {
  _type: 'listSection';
  cta?: ISanityCTA;
  description: PortableTextBlock[];
  hasCTA: boolean;
  heading: string;
  isBackgroundDefault: boolean;
  listBulletType: ListStyleEnum;
  listItems: IListItem[];
  subTitle?: string;
  title: string;
  sectionTheme?: ISanitySectionTheme;
}
