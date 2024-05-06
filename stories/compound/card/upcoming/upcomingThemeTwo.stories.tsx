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
import { UpcomingCard } from '@src/components/compound';
import { upcomingCardData } from '@root/__mock-props__/components/compound/card';
import { UpcomingCardThemeEnum } from '@src/types/compound/card/upcoming';

export default {
  title: `Components/Compound/Card/Upcoming/ThemeTwo`,
  component: UpcomingCard,
  argTypes: {
    date: {
      control: {
        type: 'object',
      },
    },
    theme: {
      control: {
        type: 'select',
      },
      options: [
        UpcomingCardThemeEnum.themeOne,
        UpcomingCardThemeEnum.themeTwo,
        UpcomingCardThemeEnum.themeThree,
      ],
    },
    buttonTitle: {
      control: 'text',
    },
    location: {
      control: 'text',
    },
    eventNumber: {
      control: 'number',
    },
  },
} as ComponentMeta<typeof UpcomingCard>;

//create the template of upcoming card
const UpcomingCardTemplate: ComponentStory<typeof UpcomingCard> = (args) => {
  return (
    <div className={`container flex justify-center items-center`}>
      <UpcomingCard {...args} />
    </div>
  );
};

export const OneDayEvent = UpcomingCardTemplate.bind({});
OneDayEvent.args = {
  ...upcomingCardData,
  theme: UpcomingCardThemeEnum.themeTwo,
};

export const TwoDayEvent = UpcomingCardTemplate.bind({});
TwoDayEvent.args = {
  ...upcomingCardData,
  theme: UpcomingCardThemeEnum.themeTwo,
  date: {
    ...upcomingCardData.date,
    isOneDay: false,
  },
};
