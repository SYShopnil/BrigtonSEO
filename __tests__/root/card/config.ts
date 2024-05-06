import { CardBorderRadiusEnum, CardShadowEnum, ICard } from '@src/types/root';

export interface ICommonProps extends Omit<ICard, 'children'> {}

export const childElementTestId = 'childElementWrapper';

export const commonProps: ICommonProps = {
  dataTestId: 'mainWrapper',
  cardShadow: CardShadowEnum.ShadowOne,
  hoverCardShadow: CardShadowEnum.None,
  cardBorderRadius: CardBorderRadiusEnum['2XL'],
};

export const testBoxShadowData = [
  CardShadowEnum.ShadowOne,
  CardShadowEnum.ShadowTwo,
  CardShadowEnum.ShadowThree,
  CardShadowEnum.None,
];
