/**
 * This story enables controls in storybook where user can
 * change props and see how the component reacts
 */

//  External Imports
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Internal Imports
import { SectionHeading } from '@src/components/root';
import { sectionHeadingData } from '@root/__mock-props__/components/root/section-heading';
import { SectionHeadingColorschemesEnum } from '@src/types/root';

export default {
  title: 'Components/Root/SectionHeading',
  component: SectionHeading,
  argTypes: {
    subTitle: {
      control: 'text',
    },
    title: {
      control: 'text',
    },
    description: {
      control: 'text',
    },
    isCenter: {
      control: 'boolean',
      defaultValue: sectionHeadingData.isCenter,
    },
    colorScheme: {
      control: 'inline-radio',
      options: [
        SectionHeadingColorschemesEnum.Blue,
        SectionHeadingColorschemesEnum.Skyblue,
        SectionHeadingColorschemesEnum.White,
        SectionHeadingColorschemesEnum.Black,
      ],
    },
    hasBottomSpacing: {
      control: 'boolean',
      defaultValue: sectionHeadingData.hasBottomSpacing,
    },
  },
} as ComponentMeta<typeof SectionHeading>;

/**
 * Template1
 */
const Template1: ComponentStory<typeof SectionHeading> = (args) => (
  <div className="bg-body section-padding-primary">
    <div className="container">
      <SectionHeading {...args} />
    </div>
  </div>
);
/**
 * Template2
 */
const Template2: ComponentStory<typeof SectionHeading> = (args) => (
  <div className="bg-primaryLight section-padding-primary">
    <div className="container">
      <SectionHeading {...args} />
    </div>
  </div>
);

export const WhiteBackgroundVariant = Template1.bind({});
WhiteBackgroundVariant.args = sectionHeadingData;

export const SolidBackgroundVariant = Template2.bind({});
SolidBackgroundVariant.args = sectionHeadingData;
