/**
 * HeroBgColorEnum
 */
export enum HeroBgColorEnum {
  GBlueLight = 'gBlueLight',
  GSkyblueLight = 'gSkyblueLight',
}

/**
 * IImage
 * //TODO: need split or update when make Image component
 */
interface IImage {
  slug: string;
  alt: string;
  width: number;
  height: number;
}

/**
 * IButton
 */
interface IButton {
  buttonText: string;
  link: string;
  linkOpenNewTab: boolean;
}

/**
 * IHeroGeneral
 */
export interface IHeroGeneral {
  bgColor: HeroBgColorEnum;
  image?: IImage;
  title: string;
  description: string;
  button?: IButton;
  isBottomAligned?: boolean;
  hasVector: boolean;
}
