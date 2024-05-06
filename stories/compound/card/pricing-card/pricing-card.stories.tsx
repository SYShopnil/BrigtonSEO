/**
 * This story enables controls in storybook where user can
 * change props and see how the component reacts
 */

import { PricingCard } from '@src/components/compound';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PriceBoxColorSchemeEnum } from '@src/types/compound';
import {
  pricingCardLargeData,
  pricingCardSmallData,
} from '@root/__mock-props__/components/compound/card';

export default {
  title: 'Components/Compound/Card/PricingCard',
  component: PricingCard,
  argTypes: {
    priceBoxColor: {
      control: { type: 'select' },
      options: [...Object.values(PriceBoxColorSchemeEnum)],
    },
  },
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof PricingCard>;

const TemplateLarge: ComponentStory<typeof PricingCard> = (args) => (
  <div className="bg-body py-[4rem] lg:py-[5rem]">
    <div className="container">
      <div className="max-w-[312px]">
        <PricingCard {...args} key={JSON.stringify(args)} />
      </div>
    </div>
  </div>
);

export const Large = TemplateLarge.bind({});
Large.args = {
  ...pricingCardLargeData,
};

const TemplateSmall: ComponentStory<typeof PricingCard> = (args) => (
  <div className="bg-body py-[4rem] lg:py-[5rem]">
    <div className="container">
      <div className="max-w-[182px]">
        <PricingCard {...args} key={JSON.stringify(args)} />
      </div>
    </div>
  </div>
);

export const Small = TemplateSmall.bind({});
Small.args = {
  ...pricingCardSmallData,
};
