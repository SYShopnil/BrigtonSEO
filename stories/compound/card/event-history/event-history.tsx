/**
 * This story enables controls in storybook where user can
 * change props and see how the component reacts
 */

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { eventHistoryCardData } from '@root/__mock-props__/components/compound/card';
import { EventHistoryCard } from '@src/components/compound';

export default {
  title: 'Components/Compound/Card/EventHistory',
  component: EventHistoryCard,
  argTypes: {
    date: {
      control: {
        type: 'object',
      },
    },
    topic: {
      control: 'text',
    },
    location: {
      control: 'text',
    },
  },
} as ComponentMeta<typeof EventHistoryCard>;

const HistoryCardTemplate: ComponentStory<typeof EventHistoryCard> = (args) => {
  return (
    <div className={`container flex justify-center items-center`}>
      <EventHistoryCard {...args} />
    </div>
  );
};

export const HistoryCardTwoDayEvent = HistoryCardTemplate.bind({});
HistoryCardTwoDayEvent.args = eventHistoryCardData;

export const HistoryCardOneDayEvent = HistoryCardTemplate.bind({});
HistoryCardOneDayEvent.args = {
  ...eventHistoryCardData,
  date: {
    ...eventHistoryCardData.date,
    isOneDay: true,
  },
};
