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
import { HeroGeneral } from '@src/components/compound';
import {
  heroGeneralTrainingInCompany,
  heroGeneralTrainingScholarship,
  heroGeneralAboutCovid,
  heroGeneralAboutCreche,
  heroGeneralAboutDates,
  heroGeneralAboutFaq,
  heroGeneralAboutTeam,
  heroGeneralSpeakers,
  heroGeneralHostFringe,
  heroGeneralPrivacy,
  heroGeneralSchedule,
} from '@root/__mock-props__/components/compound/hero-section';

export default {
  title: 'Components/Compound/Sections/Hero Section/General',
  component: HeroGeneral,
  argTypes: {},
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof HeroGeneral>;

/**
 * Template
 */
const Template: ComponentStory<typeof HeroGeneral> = (args) => (
  <HeroGeneral {...args} />
);

/**
 * TrainingInCompany
 */
export const TrainingInCompany = Template.bind({});
TrainingInCompany.args = { ...heroGeneralTrainingInCompany };

/**
 * TrainingInScholarship
 */
export const TrainingInScholarship = Template.bind({});
TrainingInScholarship.args = { ...heroGeneralTrainingScholarship };

/**
 * Speakers
 */
export const Speakers = Template.bind({});
Speakers.args = { ...heroGeneralSpeakers };

/**
 * AboutFaq
 */
export const AboutFaq = Template.bind({});
AboutFaq.args = { ...heroGeneralAboutFaq };

/**
 * AboutCovid
 */
export const AboutCovid = Template.bind({});
AboutCovid.args = { ...heroGeneralAboutCovid };

/**
 * AboutTeam
 */
export const AboutTeam = Template.bind({});
AboutTeam.args = { ...heroGeneralAboutTeam };

/**
 * AboutCreche
 */
export const AboutCreche = Template.bind({});
AboutCreche.args = { ...heroGeneralAboutCreche };

/**
 * AboutDates
 */
export const AboutDates = Template.bind({});
AboutDates.args = { ...heroGeneralAboutDates };

/**
 * Schedule
 */
export const Schedule = Template.bind({});
Schedule.args = { ...heroGeneralSchedule };

/**
 * HostFringe
 */
export const HostFringe = Template.bind({});
HostFringe.args = { ...heroGeneralHostFringe };

/**
 * Privacy
 */
export const Privacy = Template.bind({});
Privacy.args = { ...heroGeneralPrivacy };
