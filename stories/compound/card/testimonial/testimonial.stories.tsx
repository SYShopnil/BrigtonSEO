/**
 * This story enables controls in storybook where user can
 * change props and see how the component reacts
 */
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Testimonial } from '@src/components/compound';
import {
  testimonialData,
  testimonialWithoutImageData,
} from '@root/__mock-props__/components/compound/card';

export default {
  title: `Components/Compound/Card/Testimonial`,
  component: Testimonial,
  argTypes: {
    testimonial: {
      control: {
        type: 'text',
      },
    },
    isActive: {
      control: {
        type: 'boolean',
      },
    },
  },
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Testimonial>;

const Template: ComponentStory<typeof Testimonial> = (args) => {
  return (
    <div className="py-12 bg-gray">
      <div className="container">
        <div className="max-w-[636px]">
          <Testimonial {...args} />
        </div>
      </div>
    </div>
  );
};

export const Active = Template.bind({});
Active.args = {
  ...testimonialData,
  isActive: true,
};

export const Normal = Template.bind({});
Normal.args = {
  ...testimonialData,
  isActive: false,
};

export const WithoutImageActive = Template.bind({});
WithoutImageActive.args = {
  ...testimonialWithoutImageData,
  isActive: true,
};

export const WithoutImageNormal = Template.bind({});
WithoutImageNormal.args = {
  ...testimonialWithoutImageData,
  isActive: false,
};
