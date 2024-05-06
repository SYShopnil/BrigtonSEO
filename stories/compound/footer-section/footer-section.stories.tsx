/**
 * This story enables controls in storybook where user can
 * change props and see how the component reacts
 */

/**
 * External Imports
 */
import { ComponentStory, ComponentMeta } from '@storybook/react';

/**
 * Internal Imports
 */
import { FooterSection } from '@src/components/compound';
import { footerSectionData } from '@root/__mock-props__/components/compound/footer-section';

export default {
  title: 'Components/Compound/Sections/Footer Section',
  component: FooterSection,
  argTypes: {},
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof FooterSection>;

/**
 * Footer Section Template
 */
const Template: ComponentStory<typeof FooterSection> = (args) => (
  <FooterSection {...args} />
);

/**
 * Primary
 */
export const Primary = Template.bind({});
Primary.args = { ...footerSectionData };
