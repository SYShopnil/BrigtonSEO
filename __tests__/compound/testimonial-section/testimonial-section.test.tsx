import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { TestimonialSection } from '@src/components/compound';
import {
  testimonialSectionData,
  testimonialSectionBlueThemeData,
} from '@root/__mock-props__/components/compound/testimonial-section';

/**
 * Test if the testimonial section is rendering correctly
 */
describe.each([testimonialSectionData, testimonialSectionBlueThemeData])(
  `Testimonial Section`,
  (props) => {
    it(`renders testimonial section theme (${props.sectionTheme})  correctly`, () => {
      const { getByTestId } = render(<TestimonialSection {...props} />);
      const section = getByTestId('testimonial-section');
      expect(section).toBeInTheDocument();
      expect(section).toMatchSnapshot();
    });
  }
);
