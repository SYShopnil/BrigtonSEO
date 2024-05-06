import {
  ButtonColorSchemeEnum,
  ButtonSizeEnum,
  IconEnum,
} from '@src/types/root';

export const buttonProps = {
  buttonText: 'Button Text',
  colorScheme: ButtonColorSchemeEnum.WhiteBgTextBlue,
  size: ButtonSizeEnum.Large,
  iconName: IconEnum.CornerUpLeft,
  iconIsLeft: true,
  clickHandler: () => null,
  'data-testid': 'button-test-id',
};
