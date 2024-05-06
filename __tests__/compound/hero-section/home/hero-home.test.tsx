import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { HeroHome } from '@src/components/compound';
import {
  heroHomeData,
  heroHomeFringeEventsData,
  heroHomeTrainingData,
} from '@root/__mock-props__/components/compound/hero-section';

/**
 * Test if the hero Home section is rendering correctly
 */
describe.each([
  [heroHomeData, 'Home'],
  [heroHomeFringeEventsData, 'Fringe Events'],
  [heroHomeTrainingData, 'Training'],
])('Hero Home Section', (props, pageName) => {
  it(`renders hero for ${pageName} page correctly`, () => {
    const playStub = jest
      .spyOn(window.HTMLMediaElement.prototype, 'play')
      .mockImplementation(async () => {});
    const { getByTestId } = render(<HeroHome {...props} />);
    const section = getByTestId('hero-home');
    expect(section).toBeInTheDocument();
    expect(playStub).toHaveBeenCalled();
    playStub.mockRestore();
    expect(section).toMatchSnapshot();
  });
});
