/**
 * This story enables controls in storybook where user can
 * change props and see how the component reacts
 */

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ListContentSection } from '@src/components/compound';
import {
  listConentBlockAboutBallot,
  listConentBlockAboutVenueTravel,
  listConentBlockAboutCreche,
} from '@root/__mock-props__/components/compound/list-content-section';
import { SectionThemeEnum } from '@src/types/compound';

export default {
  title: 'Components/Compound/Sections/List Content Section',
  component: ListContentSection,
  argTypes: {
    sectionTheme: {
      control: { type: 'select' },
      options: [...Object.values(SectionThemeEnum)],
    },
  },
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof ListContentSection>;

const Template: ComponentStory<typeof ListContentSection> = (args) => (
  <ListContentSection {...args} />
);

export const AboutBallot = Template.bind({});
AboutBallot.args = { ...listConentBlockAboutBallot };

export const AboutVenueTravel = Template.bind({});
AboutVenueTravel.args = { ...listConentBlockAboutVenueTravel };

export const AboutCreche = Template.bind({});
AboutCreche.args = { ...listConentBlockAboutCreche };
