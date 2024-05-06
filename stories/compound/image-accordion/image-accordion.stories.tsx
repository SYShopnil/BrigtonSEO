/**
 * This story enables controls in storybook where user can
 * change props and see how the component reacts
 */

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ImageAccordion } from '@src/components/compound';
import { imageAccordionData } from '@root/__mock-props__/components/compound/image-accordion';
import { SectionThemeEnum } from '@src/types/compound';

export default {
  title: 'Components/Compound/Sections/ImageAccortion',
  component: ImageAccordion,
  argTypes: {
    sectionTheme: {
      control: { type: 'select' },
      options: [...Object.values(SectionThemeEnum)],
    },
  },
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof ImageAccordion>;

const Template: ComponentStory<typeof ImageAccordion> = (args) => (
  <ImageAccordion {...args} />
);

export const Home = Template.bind({});
Home.args = { ...imageAccordionData };
