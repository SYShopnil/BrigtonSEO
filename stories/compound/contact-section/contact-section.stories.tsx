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
import { ContactSection } from '@src/components/compound';
import {
  contactSectionWithoutAddressData,
  contactSectionWithAddressData,
} from '@root/__mock-props__/components/compound/contact-section';

export default {
  title: 'Components/Compound/Sections/Contact Section',
  component: ContactSection,
  argTypes: {},
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof ContactSection>;

/**
 * Template
 */
const Template: ComponentStory<typeof ContactSection> = (args) => (
  <ContactSection {...args} />
);

/**
 * WithoutAddress
 */
export const WithoutAddress = Template.bind({});
WithoutAddress.args = { ...contactSectionWithoutAddressData };

/**
 * WithAddress
 */
export const WithAddress = Template.bind({});
WithAddress.args = {
  ...contactSectionWithAddressData,
};
