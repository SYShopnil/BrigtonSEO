import { upcomingCardData } from '@root/__mock-props__/components/compound/card';
import { UpcomingCard } from '@src/components/compound';
import { render } from '@testing-library/react';

describe('When upcoming card component has called', () => {
  it('expect upcoming card component render successfully', () => {
    const { getByTestId } = render(<UpcomingCard {...upcomingCardData} />);
    const upComingElement = getByTestId('upcomingCard');
    expect(upComingElement).toBeInTheDocument();
    expect(upComingElement).toMatchSnapshot();
  });
});
