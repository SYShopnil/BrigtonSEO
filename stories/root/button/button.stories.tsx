/**
 * This story enables controls in storybook where user can
 * change props and see how the component reacts
 */

import { Button } from '@src/components/root/button';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
  ButtonColorSchemeEnum,
  ButtonSizeEnum,
  IconEnum,
} from '@src/types/root';

export default {
  title: 'Components/Root/Button/Filled Buttons',
  component: Button,
  argTypes: {
    buttonText: { control: 'text' },
    link: {
      control: 'text',
      if: { arg: 'link', exists: true },
    },
    colorScheme: {
      control: { type: 'select' },
      options: [...Object.values(ButtonColorSchemeEnum)],
    },
    hoverColorScheme: {
      control: { type: 'select' },
      options: [undefined, ...Object.values(ButtonColorSchemeEnum)],
    },
    size: {
      control: 'inline-radio',
      options: [
        ButtonSizeEnum.Large,
        ButtonSizeEnum.Medium,
        ButtonSizeEnum.Small,
        ButtonSizeEnum.ExtraSmall,
      ],
    },
    linkOpenNewTab: {
      control: 'boolean',
      if: { arg: 'linkOpenNewTab', exists: true },
    },
    iconName: {
      control: 'inline-radio',
      options: [
        IconEnum.CornerUpRight,
        IconEnum.CornerUpLeft,
        IconEnum.Send,
        IconEnum.Navigation,
        IconEnum.Calendar,
        IconEnum.ArrowLeftLine,
        IconEnum.ArrowRightLine,
        undefined,
      ],
    },
    iconIsLeft: {
      control: 'boolean',
      defaultValue: false,
    },
    shiftIconOnHover: {
      control: 'boolean',
      defaultValue: false,
    },
  },
} as ComponentMeta<typeof Button>;

/**
 * Button Template
 */
const ButtonTemplate: ComponentStory<typeof Button> = (args) => (
  <div className="bg-body py-[4rem] lg:py-[5rem]">
    <div className="container">
      <Button {...args} />
    </div>
  </div>
);

/**
 * Redirect Button Template
 */
const RedirectButtonTemplate: ComponentStory<typeof Button.RedirectButton> = (
  args
) => (
  <div className="bg-body py-[4rem] lg:py-[5rem]">
    <div className="container">
      <Button.RedirectButton {...args} />
    </div>
  </div>
);

/**
 * colorScheme - BlueBgTextWhite & BlueHorizontalGradientBgTextWhite
 */
export const NormalButton = ButtonTemplate.bind({});
NormalButton.args = {
  buttonText: 'View our sponsors',
  colorScheme: ButtonColorSchemeEnum.BlueBgTextWhite,
  hoverColorScheme: ButtonColorSchemeEnum.BlueHorizontalGradientBgTextWhite,
  size: ButtonSizeEnum.Large,
  iconName: IconEnum.Send,
};

/**
 * colorScheme - blue-over-gBlueLight
 */
export const RedirectButton = RedirectButtonTemplate.bind({});
RedirectButton.args = {
  buttonText: 'View our sponsors',
  colorScheme: ButtonColorSchemeEnum.WhiteBgTextBlue,
  hoverColorScheme: ButtonColorSchemeEnum.GhostBgTextBlue,
  size: ButtonSizeEnum.Large,
  linkOpenNewTab: false,
  iconName: IconEnum.Send,
  link: 'https://www.google.com',
};
