import {
  testimonialData,
  testimonialWithoutImageData,
} from '@root/__mock-props__/components/compound/card';
import { Testimonial } from '@src/components/compound';
import { render } from '@testing-library/react';

describe.each([
  [testimonialData, 'image', true],
  [testimonialData, 'image', false],
  [testimonialWithoutImageData, 'icon', true],
  [testimonialWithoutImageData, 'icon', false],
])('Testimonial Card', (props, imageOrIcon, isActive) => {
  it(`renders testimonial card with ${imageOrIcon} and active state ${isActive}`, () => {
    const { getByTestId } = render(
      <Testimonial isActive={true} {...testimonialData} />
    );
    const getCardRootElement = getByTestId('testimonial-card');
    expect(getCardRootElement).toBeInTheDocument();
    expect(getCardRootElement).toMatchSnapshot();
  });
});
