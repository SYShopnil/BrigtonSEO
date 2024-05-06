/**
 * This story enables controls in storybook where user can
 * change props and see how the component reacts
 */

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TestimonialSection } from '@src/components/compound';
import { testimonialSectionData } from '@root/__mock-props__/components/compound/testimonial-section';
import { SectionThemeEnum } from '@src/types/compound';

export default {
  title: 'Components/Compound/Sections/TestimonialSection',
  component: TestimonialSection,
  argTypes: {
    sectionTheme: {
      control: { type: 'select' },
      options: [...Object.values(SectionThemeEnum)],
    },
  },
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof TestimonialSection>;

const Template: ComponentStory<typeof TestimonialSection> = (args) => (
  <TestimonialSection {...args} />
);

export const Testimonial = Template.bind({});
Testimonial.args = { ...testimonialSectionData };
