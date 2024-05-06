import { render, fireEvent } from '@testing-library/react';
import { Button } from '@src/components/root';
import { buttonProps } from './config';
import {
  ButtonColorSchemeEnum,
  ButtonSizeEnum,
  IconEnum,
} from '@src/types/root';

describe('Button Render Test', () => {
  it('renders buttons correctly', () => {
    const { getByTestId } = render(<Button {...buttonProps} />);
    const button = getByTestId(buttonProps['data-testid']);

    expect(button).toBeInTheDocument();
    expect(button).toMatchSnapshot();
  });
});

describe('Given a mock function is passed to button', () => {
  it('Expect mockFunction to be called on button click', () => {
    const mockFunction = jest.fn();

    const props = { ...buttonProps, clickHandler: mockFunction };
    const { getByTestId } = render(<Button {...props} />);
    const button = getByTestId(buttonProps['data-testid']);
    fireEvent.click(button);
    expect(mockFunction).toHaveBeenCalled();
  });
});

describe.each([true, false])(
  'Given open new tab configurations',
  (linkOpenNewTab) => {
    it(`Expect redirect button to contain href and ${
      linkOpenNewTab ? 'target=_blank' : 'target=_self'
    }`, () => {
      const props = {
        ...buttonProps,
        link: 'https://www.google.com/',
        linkOpenNewTab: linkOpenNewTab,
      };
      const { getByTestId } = render(<Button.RedirectButton {...props} />);
      const button = getByTestId(buttonProps['data-testid']);

      expect((button.parentElement as HTMLAnchorElement).href).toEqual(
        'https://www.google.com/'
      );

      if (linkOpenNewTab) {
        expect((button.parentElement as HTMLAnchorElement).target).toEqual(
          '_blank'
        );
      } else {
        expect((button.parentElement as HTMLAnchorElement).target).toEqual(
          '_self'
        );
      }
    });
  }
);

describe.each([...Object.values(ButtonSizeEnum)])(
  'Given button size: %s',
  (size) => {
    it(`Expect button to have class ${size}`, () => {
      const props = { ...buttonProps, size: size };
      const { getByTestId } = render(<Button {...props} />);
      const button = getByTestId(buttonProps['data-testid']);
      expect(button).toHaveClass(size);
    });
  }
);

describe.each([...Object.values(IconEnum)])(
  'Given icon option: %s',
  (iconEnum) => {
    it(`Expect button to have ${iconEnum}`, () => {
      const props = { ...buttonProps, iconName: iconEnum };
      const { getByTestId } = render(<Button {...props} />);
      const button = getByTestId(buttonProps['data-testid']);
      expect(button).toMatchSnapshot();
    });
  }
);

describe.each([...Object.values(ButtonColorSchemeEnum)])(
  'Given color scheme %s',
  (colorScheme) => {
    it(`Expect button to have class ${colorScheme}`, () => {
      const props = { ...buttonProps, colorScheme: colorScheme };
      const { getByTestId } = render(<Button {...props} />);
      const button = getByTestId(buttonProps['data-testid']);

      expect(button).toHaveClass(colorScheme);
    });
  }
);

describe.each([true, false])('Given iconIsLeft boolean', (iconIsLeft) => {
  it(`Expect button to ${
    iconIsLeft ? 'not' : ''
  } contain class: flex-row-reverse`, () => {
    const props = { ...buttonProps, iconIsLeft: iconIsLeft };
    const { getByTestId } = render(<Button {...props} />);
    const button = getByTestId(buttonProps['data-testid']);

    if (iconIsLeft) {
      expect(button).toHaveClass('flex-row-reverse');
    } else {
      expect(button).not.toHaveClass('flex-row-reverse');
    }
  });
});
