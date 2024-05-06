import {
  listConentBlockAboutBallot,
  listConentBlockAboutCreche,
  listConentBlockAboutVenueTravel,
} from '@root/__mock-props__/components/compound/list-content-section';
import { ListContentSection } from '@src/components/compound';
import { render } from '@testing-library/react';

/**
 * Test if the list content section is rendering correctly
 */
describe.each([
  listConentBlockAboutBallot,
  listConentBlockAboutVenueTravel,
  listConentBlockAboutCreche,
])(`List Content Section`, (props) => {
  it(`renders list content section with section theme ${props.sectionTheme}`, () => {
    const { getByTestId } = render(<ListContentSection {...props} />);
    const section = getByTestId('list-content-section');
    expect(section).toBeInTheDocument();
    expect(section).toMatchSnapshot();
  });
});
