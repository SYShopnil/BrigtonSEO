/**
 * This story enables controls in storybook where user can
 * change props and see how the component reacts
 */
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { HeroHome } from '@src/components/compound';
import {
  heroHomeData,
  heroHomeFringeEventsData,
  heroHomeTrainingData,
} from '@root/__mock-props__/components/compound/hero-section';

export default {
  title: 'Components/Compound/Sections/Hero Section/Home',
  component: HeroHome,
  argTypes: {},
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof HeroHome>;

const Template: ComponentStory<typeof HeroHome> = (args) => (
  <HeroHome {...args} />
);

export const Home = Template.bind({});
Home.args = { ...heroHomeData };

export const FringeEvents = Template.bind({});
FringeEvents.args = { ...heroHomeFringeEventsData };

export const Training = Template.bind({});
Training.args = { ...heroHomeTrainingData };
