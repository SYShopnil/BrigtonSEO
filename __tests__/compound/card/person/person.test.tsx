import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Person } from '@src/components/compound';
import {
  speakerCardNormalData,
  speakerCardTransparentData,
  teamData,
} from '@root/__mock-props__/components/compound/card';

/**
 * Test if the person card (Speaker Normal) is rendering correctly
 */
it(`renders Speaker Normal Card correctly`, () => {
  const { getByTestId } = render(<Person {...speakerCardNormalData} />);
  const card = getByTestId('person-card');
  expect(card).toBeInTheDocument();
  expect(card).toMatchSnapshot();
});

/**
 * Test if the person card (Speaker Transparent) is rendering correctly
 */
it(`renders Speaker Transparent Card correctly`, () => {
  const { getByTestId } = render(
    <Person.Transparent {...speakerCardTransparentData} />
  );
  const card = getByTestId('person-card');
  expect(card).toBeInTheDocument();
  expect(card).toMatchSnapshot();
});

/**
 * Test if the person card (Team) is rendering correctly
 */
it(`renders Team Card correctly`, () => {
  const { getByTestId } = render(<Person.Team {...teamData} />);
  const card = getByTestId('person-card');
  expect(card).toBeInTheDocument();
  expect(card).toMatchSnapshot();
});
