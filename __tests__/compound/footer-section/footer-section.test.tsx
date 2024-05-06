/**
 * External Imports
 */
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

/**
 * Internal Imports
 */
import { FooterSection } from '@src/components/compound';
import { footerSectionData } from '@root/__mock-props__/components/compound/footer-section';

/**
 * Test if the footer section is rendering correctly
 */
it('renders footer section correctly', () => {
  const { getByTestId } = render(<FooterSection {...footerSectionData} />);
  const footer = getByTestId('footer-section');
  expect(footer).toBeInTheDocument();
  expect(footer).toMatchSnapshot();
});
