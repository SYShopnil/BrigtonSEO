/**
 *
 * This stories enable controls in storybook where user
 * can change props and how the component reacts
 *
 */

import { Card } from '@src/components/root';
import { CardBorderRadiusEnum, CardShadowEnum } from '@src/types/root';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: `Components/Root/Card`,
  component: Card,
  argTypes: {
    dataTestId: {
      table: {
        disable: true,
      },
    },
    cardShadow: {
      control: {
        type: 'select',
      },
      options: [
        CardShadowEnum.ShadowOne,
        CardShadowEnum.ShadowTwo,
        CardShadowEnum.ShadowThree,
        CardShadowEnum.None,
      ],
    },
    hoverCardShadow: {
      control: {
        type: 'select',
      },
      options: [
        CardShadowEnum.ShadowOne,
        CardShadowEnum.ShadowTwo,
        CardShadowEnum.ShadowThree,
        CardShadowEnum.None,
        null,
      ],
    },
    cardBorderRadius: {
      control: {
        type: 'select',
      },
      options: [CardBorderRadiusEnum['2XL'], CardBorderRadiusEnum['XL']],
    },
  },
} as ComponentMeta<typeof Card>;

/**
 * Create Card Template
 *
 */
const CardTemplate: ComponentStory<typeof Card> = (args) => {
  return (
    <div className={`container`}>
      <Card {...args}>
        <div className={`flex justify-between p-[25px]`}>
          <div>
            <h1>Right Side part</h1>
          </div>
          <div>
            <h1>Left Side part</h1>
          </div>
        </div>
      </Card>
    </div>
  );
};

/**
 * Card component with box shadow
 */
export const card = CardTemplate.bind({});
card.args = {
  dataTestId: 'mainWrapper',
  cardBorderRadius: CardBorderRadiusEnum.XL,
  cardShadow: CardShadowEnum.ShadowOne,
};
