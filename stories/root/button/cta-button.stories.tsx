/**
 * This story enables controls in storybook where user can
 * change props and see how the component reacts
 */

import { CtaButton } from '@src/components/root/button';
import {
  CtaButtonColorSchemeEnum,
  CtaButtonVariantEnum,
} from '@src/types/root/button';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Components/Root/Button/CTA Button',
  component: CtaButton,
  argTypes: {
    // ButtonText
    buttonText: { control: 'text' },

    // Color Scheme
    colorScheme: {
      control: { type: 'radio' },
      options: [...Object.values(CtaButtonColorSchemeEnum)],
    },

    hoverColorScheme: {
      control: { type: 'radio' },
      options: [undefined, ...Object.values(CtaButtonColorSchemeEnum)],
    },

    // General
    link: { control: 'text', defaultValue: 'https://www.google.com' },

    // linkOpenNewTab
    linkOpenNewTab: {
      control: 'boolean',
    },
    variant: {
      control: 'select',
      options: [
        CtaButtonVariantEnum.WithIcon,
        CtaButtonVariantEnum.WithOutIcon,
      ],
    },
  },
} as ComponentMeta<typeof CtaButton>;

/**
 * Template
 */
const Template: ComponentStory<typeof CtaButton> = (args) => (
  <div className="bg-body py-[4rem] lg:py-[5rem]">
    <div className="container">
      <CtaButton {...args} />
    </div>
  </div>
);

/**
 * colorScheme - Skyblue-Over-Blue
 */
export const WithIcon = Template.bind({});
WithIcon.args = {
  // General
  buttonText: 'Super cheap on-site creche',

  // Color Scheme
  colorScheme: CtaButtonColorSchemeEnum.Primary,
  hoverColorScheme: CtaButtonColorSchemeEnum.Skyblue,

  // linkOpenNewTab
  linkOpenNewTab: false,
  variant: CtaButtonVariantEnum.WithIcon,
};

/**
 * colorScheme - Skyblue-Over-Blue
 */
export const WithOutIcon = Template.bind({});
WithOutIcon.args = {
  // General
  buttonText: 'Super cheap on-site creche',

  // Color Scheme
  colorScheme: CtaButtonColorSchemeEnum.Skyblue,
  hoverColorScheme: CtaButtonColorSchemeEnum.Primary,

  // linkOpenNewTab
  linkOpenNewTab: false,
  variant: CtaButtonVariantEnum.WithOutIcon,
};
