import { HeroBgColorEnum, IHeroLogo, IInfoCount } from '@src/types/compound';
import { ISanityCTA, ISanityImage } from '../general';

export interface IGeneralHero {
  _type: 'heroGeneral';
  bgColor: HeroBgColorEnum;
  title: string;
  description: string;
  isBottomAligned?: boolean;
  hasVector: boolean;
  hasImage: boolean;
  image?: ISanityImage;
  hasCTA: boolean;
  cta?: ISanityCTA;
}

export interface IHomeHero {
  _type: 'heroHome';
  subtitle?: string;
  title: string;
  description?: string;
  bgVideoUrl: string;
  hasVector: boolean;
  logo?: IHeroLogo;
  infoCounts?: IInfoCount[];
}
