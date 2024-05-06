import { SanityAsset } from '@sanity/image-url/lib/types/types';
import { SectionThemeEnum } from '@src/types/compound';
import { IconEnum } from '@src/types/root';
import { ISanityPerson } from '../person';

export interface ISanityCTA {
  ctaLink: string;
  ctaOpenNewTab: boolean;
  ctaTitle: string;
}

export interface ISanityImage {
  alt: string;
  image: SanityAsset;
}

export interface ISanitySocialLinks {
  platform: IconEnum;
  url: string;
}

export interface ISanityCommonSessionFields {
  topic: string;
  description: string;
  speakers: ISanityPerson[];
}

export interface ISanitySectionTheme {
  theme: SectionThemeEnum;
}
