import { Card } from '@src/components/root';
import { CardShadowEnum } from '@src/types/root';
import { render } from '@testing-library/react';
import {
  childElementTestId,
  commonProps,
  ICommonProps,
  testBoxShadowData,
} from './config';

/**
 *
 * Demo element
 *
 */
const children = () => {
  return (
    <div
      className={`flex justify-between p-[25px] `}
      data-testid={childElementTestId}
    >
      <div>
        <h1>Right Side part</h1>
      </div>
      <div>
        <h1>Left Side part</h1>
      </div>
    </div>
  );
};

describe('When card element is called', () => {
  it('expect card to render correctly', () => {
    const { getByTestId } = render(<Card {...commonProps}>{children()}</Card>);
    const card = getByTestId(commonProps.dataTestId);
    expect(card).toBeInTheDocument();
    expect(card).toMatchSnapshot();
  });
});

/**
 *
 * Test box-shadow functionality
 *
 **/
describe.each(testBoxShadowData)(
  'When shadow props are passed',
  (shadowClass) => {
    it('expect card to have appropriate shadow in its class name', () => {
      const props: ICommonProps = {
        ...commonProps,
        cardShadow: shadowClass,
      };
      const { getByTestId } = render(<Card {...props}>{children()}</Card>);
      const cardWrapper = getByTestId(commonProps.dataTestId);
      expect(cardWrapper).toHaveClass(shadowClass);
    });
  }
);

/**
 *
 * Check whether the child element is being rendered
 *
 */
describe('When a child element is passed', () => {
  it('expect child to exist in document', () => {
    const props: ICommonProps = {
      ...commonProps,
      cardShadow: CardShadowEnum.ShadowOne,
    };

    const { queryByTestId } = render(<Card {...props}>{children()}</Card>);
    const childElement = queryByTestId(childElementTestId);
    expect(childElement).toBeInTheDocument();
  });
});
