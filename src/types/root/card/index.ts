export interface ICard {
  dataTestId: string;
  cardShadow: CardShadowEnum;
  hoverCardShadow?: CardShadowEnum;
  cardBorderRadius: CardBorderRadiusEnum;
}

export enum CardShadowEnum {
  ShadowOne = 'shadow-One',
  ShadowTwo = 'shadow-Two',
  ShadowThree = 'shadow-Three',
  None = 'shadow-none',
}

export enum CardBorderRadiusEnum {
  XL = 'radius-xl',
  '2XL' = 'radius-2xl',
}
