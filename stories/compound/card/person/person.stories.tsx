/**
 * This story enables controls in storybook where user can
 * change props and see how the component reacts
 */

/**
 * External import
 */
import { ComponentMeta, ComponentStory } from '@storybook/react';

/**
 *
 * Internal import
 */
import { Person } from '@src/components/compound';
import {
  speakerCardNormalData,
  speakerCardTransparentData,
  teamData,
} from '@root/__mock-props__/components/compound/card';

export default {
  title: `Components/Compound/Card/Person`,
  component: Person,
  argTypes: {},
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Person>;

/**
 * NormalTemplate
 */
const NormalTemplate: ComponentStory<typeof Person> = (args) => (
  <div className="lg:py-16 py-10 bg-gray">
    <div className="container">
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2  gap-6">
        <Person {...args} />
        <Person {...args} />
        <Person {...args} />
        <Person {...args} />
      </div>
    </div>
  </div>
);

/**
 * TransparentTemplate
 */
const TransparentTemplate: ComponentStory<typeof Person.Transparent> = (
  args
) => (
  <div className="lg:py-16 py-10 bg-gray">
    <div className="container">
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2  gap-6">
        <Person.Transparent {...args} />
        <Person.Transparent {...args} />
        <Person.Transparent {...args} />
        <Person.Transparent {...args} />
      </div>
    </div>
  </div>
);

/**
 * TeamTemplate
 */
const TeamTemplate: ComponentStory<typeof Person.Team> = (args) => (
  <div className="lg:py-16 py-10 bg-gray">
    <div className="container">
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2  gap-6">
        <Person.Team {...args} />
        <Person.Team {...args} />
        <Person.Team {...args} />
        <Person.Team {...args} />
      </div>
    </div>
  </div>
);

/**
 * SpeakerNormal
 */
export const SpeakerNormal = NormalTemplate.bind({});
SpeakerNormal.args = {
  ...speakerCardNormalData,
};

/**
 * SpeakerTransparent
 */
export const SpeakerTransparent = TransparentTemplate.bind({});
SpeakerTransparent.args = {
  ...speakerCardTransparentData,
};
/**
 * Team
 */
export const Team = TeamTemplate.bind({});
Team.args = {
  ...teamData,
};
