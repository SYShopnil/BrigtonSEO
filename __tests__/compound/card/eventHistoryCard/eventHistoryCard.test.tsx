import { eventHistoryCardData } from '@root/__mock-props__/components/compound/card';
import { EventHistoryCard } from '@src/components/compound';
import { render } from '@testing-library/react';

describe('When Event History Card element has called', () => {
  it('expect event history card element will render successfully', () => {
    const { getByTestId } = render(
      <EventHistoryCard {...eventHistoryCardData} />
    );
    const getCardRootElement = getByTestId('IDEventHistoryCard');
    expect(getCardRootElement).toBeInTheDocument();
    expect(getCardRootElement).toMatchSnapshot();
  });
});
