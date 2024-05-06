/**
 * This story enables controls in storybook where user can
 * change props and see how the component reacts
 */

import { BuyTicketCard as MainCard } from '@src/components/compound';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { buyTicketCardData } from '@root/__mock-props__/components/compound/card';

export default {
  title: 'Components/Compound/Card/BuyTicketCard',
  component: MainCard,
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    attendanceText: { control: 'text' },
    attendanceNumber: { control: 'number' },
  },
} as ComponentMeta<typeof MainCard>;

const Template: ComponentStory<typeof MainCard> = (args) => (
  <div className="bg-body py-[4rem] lg:py-[5rem]">
    <div className="container">
      <div className="max-w-[608px]">
        <MainCard {...args} />
      </div>
    </div>
  </div>
);

export const BuyTicketCard = Template.bind({});
BuyTicketCard.args = {
  ...buyTicketCardData,
};
