import { imageAccordionData } from '@root/__mock-props__/components/compound/image-accordion';
import { ImageAccordion } from '@src/components/compound/image-accordion';
import { render } from '@testing-library/react';

/**
 * Test if the image accordion section correctly
 */
it(`renders image accordion section correctly`, () => {
  const { getByTestId } = render(<ImageAccordion {...imageAccordionData} />);
  const section = getByTestId('image-accordion-section');
  expect(section).toBeInTheDocument();
  expect(section).toMatchSnapshot();
});
