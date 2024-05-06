import { IconEnum } from '@src/types/root';
import React from 'react';

export enum ButtonColorSchemeEnum {
  // Solid Color
  WhiteBgTextPurple = 'WhiteBgTextPurple',
  WhiteBgTextMint = 'WhiteBgTextMint',
  WhiteBgTextPink = 'WhiteBgTextPink',
  BlackBgTextAvocado = 'BlackBgTextAvocado',
  BlackBgTextSkyblueLight = 'BlackBgTextSkyblueLight',
  WhiteBgTextBlue = 'WhiteBgTextBlue',
  WhiteBgTextBlueLight = 'WhiteBgTextBlueLight',
  WhiteBgTextSkyblue = 'WhiteBgTextSkyblue',
  WhiteBgTextSkyblueLight = 'WhiteBgTextSkyblueLight',
  WhiteBgTextGreen = 'WhiteBgTextGreen',
  WhiteBgTextBlackLight = 'WhiteBgTextBlackLight',
  WhiteBgTextYellow = 'WhiteBgTextYellow',
  BlueBgTextWhite = 'BlueBgTextWhite',
  BlueLightBgTextWhite = 'BlueLightBgTextWhite',
  SkyblueBgTextWhite = 'SkyblueBgTextWhite',
  SkyblueLightBgTextWhite = 'SkyblueLightBgTextWhite',
  GreenBgTextWhite = 'GreenBgTextWhite',
  BlackLightBgTextWhite = 'BlackLightBgTextWhite',
  YellowBgTextWhite = 'YellowBgTextWhite',
  GrayBgTextBlack = 'GrayBgTextBlack',
  GhostBgTextBlue = 'GhostBgTextBlue',
  GhostBgTextSkyblue = 'GhostBgTextSkyblue',
  GhostBgTextSkyblueLight = 'GhostBgTextSkyblueLight',
  // Gradient with White Text
  BlueHorizontalGradientBgTextWhite = 'BlueHorizontalGradientBgTextWhite',
  BlueVerticalGradientBgTextWhite = 'BlueVerticalGradientBgTextWhite',
  BlueVerticalReverseGradientBgTextWhite = 'BlueVerticalReverseGradientBgTextWhite',
  SkyblueHorizontalGradientBgTextWhite = 'SkyblueHorizontalGradientBgTextWhite',
  SkyblueVerticalGradientBgTextWhite = 'SkyblueVerticalGradientBgTextWhite',
  SkyblueVerticalReverseGradientBgTextWhite = 'SkyblueVerticalReverseGradientBgTextWhite',
}

export enum ButtonSizeEnum {
  Large = 'btn-lg',
  Medium = 'btn-md',
  Small = 'btn-sm',
  ExtraSmall = 'btn-ex-sm',
}

export interface IButton {
  buttonText: string;
  colorScheme: ButtonColorSchemeEnum;
  hoverColorScheme?: ButtonColorSchemeEnum;
  size: ButtonSizeEnum;
  iconName?: IconEnum;
  iconIsLeft?: boolean;
  clickHandler: (
    e: React.MouseEvent<HTMLElement> | React.FormEvent<HTMLFormElement>
  ) => void;
  'data-testid': string;
  shiftIconOnHover?: boolean;
}

export interface IRedirectButton extends Omit<IButton, 'clickHandler'> {
  link: string;
  linkOpenNewTab: boolean;
}

// ICtaButton
export interface ICtaButton {
  buttonText: string;
  colorScheme: CtaButtonColorSchemeEnum;
  hoverColorScheme?: CtaButtonColorSchemeEnum;
  link: string;
  linkOpenNewTab: boolean;
  'data-testid': string;
  variant: CtaButtonVariantEnum;
}
export enum CtaButtonVariantEnum {
  WithIcon = 'WithIcon',
  WithOutIcon = 'WithOutIcon',
}

export enum CtaButtonColorSchemeEnum {
  Primary = 'Primary',
  Skyblue = 'Skyblue',
}
