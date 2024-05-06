import { render } from '@testing-library/react';
import { PricingCard } from '@src/components/compound';
import {
  pricingCardLargeData,
  pricingCardSmallData,
} from '@root/__mock-props__/components/compound/card';

/**
 * Test if the pricing card  is rendering correctly
 */
describe.each([pricingCardLargeData, pricingCardSmallData])(
  'Pricing Card',
  (props) => {
    it(`renders Pricing Card ${props.priceBoxSize} correctly`, () => {
      const { getByTestId } = render(<PricingCard {...props} />);
      const card = getByTestId('pricing-card');
      expect(card).toBeInTheDocument();
      expect(card).toMatchSnapshot();
    });
  }
);
