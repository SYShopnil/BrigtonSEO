import { render } from '@testing-library/react';
import { BuyTicketCard } from '@src/components/compound';
import { buyTicketCardData } from '@root/__mock-props__/components/compound/card';

/**
 * Test if the buy ticket card is rendering correctly
 */
it('renders Buy Ticket Card correctly', () => {
  const { getByTestId } = render(<BuyTicketCard {...buyTicketCardData} />);
  const getCardRootElement = getByTestId('buy-ticket-card');
  expect(getCardRootElement).toBeInTheDocument();
  expect(getCardRootElement).toMatchSnapshot();
});
