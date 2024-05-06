/**
 * External Imports
 */
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

/**
 * Internal Imports
 */
import { ContactSection } from '@src/components/compound';
import {
  contactSectionWithoutAddressData,
  contactSectionWithAddressData,
} from '@root/__mock-props__/components/compound/contact-section';

/**
 * Test if the contact section is rendering correctly
 */
it(`renders contact section without address correctly`, () => {
  const { getByTestId } = render(
    <ContactSection {...contactSectionWithoutAddressData} />
  );
  const section = getByTestId('contact-section');
  expect(section).toBeInTheDocument();
  expect(section).toMatchSnapshot();
});
it(`renders  contact section with address correctly`, () => {
  const { getByTestId } = render(
    <ContactSection {...contactSectionWithAddressData} />
  );
  const section = getByTestId('contact-section');
  expect(section).toBeInTheDocument();
  expect(section).toMatchSnapshot();
});
