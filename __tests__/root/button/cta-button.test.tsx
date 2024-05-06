import { render } from '@testing-library/react';
import { CtaButton } from '@src/components/root';
import {
  ICtaButton,
  CtaButtonColorSchemeEnum,
  CtaButtonVariantEnum,
} from '@src/types/root';

const props: ICtaButton = {
  buttonText: 'Click Link',
  colorScheme: CtaButtonColorSchemeEnum.Primary,
  link: 'https://www.google.com/',
  linkOpenNewTab: false,
  'data-testid': 'cta-button',
  variant: CtaButtonVariantEnum.WithIcon,
};

describe.each([true, false])(
  'Given linkOpenNewTab configurations',
  (linkOpenNewTab) => {
    it('expect cta button to render correctly', () => {
      props.linkOpenNewTab = linkOpenNewTab;
      const { getByTestId } = render(<CtaButton {...props} />);
      const ctaButton = getByTestId(props['data-testid']);

      expect(ctaButton).toBeInTheDocument();
      expect((ctaButton as HTMLAnchorElement).href).toEqual(props.link);
      if (linkOpenNewTab) {
        expect((ctaButton as HTMLAnchorElement).target).toEqual('_blank');
      } else {
        expect((ctaButton as HTMLAnchorElement).target).toEqual('_self');
      }
      expect(ctaButton).toMatchSnapshot();
    });
  }
);
