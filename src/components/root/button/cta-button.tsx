import Link from 'next/link';
import { IconEnum, ICtaButton, CtaButtonVariantEnum } from '@src/types/root';
import IconStore from '../_icons';
import Styles from './button.module.scss';

/**
 * @param {object} ICtaButton
 * @returns JSX.Element
 */
export const CtaButton = ({
  buttonText,
  colorScheme,
  hoverColorScheme,
  link,
  linkOpenNewTab,
  'data-testid': dataTestId,
  variant,
}: ICtaButton) => {
  const hoverClass = hoverColorScheme
    ? Styles[`hover-${hoverColorScheme}`]
    : '';
  const isWithIcon = variant == CtaButtonVariantEnum.WithIcon;
  const underlineClass = isWithIcon ? '' : Styles[variant];
  return (
    <>
      <Link href={link ? link : ''} passHref>
        <a
          target={linkOpenNewTab ? '_blank' : '_self'}
          className={
            Styles['cta-button'] +
            ' ' +
            Styles[colorScheme] +
            ' ' +
            hoverClass +
            ' ' +
            underlineClass +
            ` group`
          }
          data-testid={dataTestId}
        >
          {buttonText && (
            <div
              className={`flex justify-center items-center space-x-[1.25rem]`}
            >
              <span>{buttonText}</span>
              {isWithIcon && (
                <div>
                  <IconStore iconName={IconEnum.ArrowRightLine} />
                </div>
              )}
            </div>
          )}
        </a>
      </Link>
    </>
  );
};
