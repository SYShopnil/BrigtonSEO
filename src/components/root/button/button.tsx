import Link from 'next/link';
import { IRedirectButton, IButton } from '@src/types/root';
import IconStore from '@src/components/root/_icons';
import Styles from './button.module.scss';

/**
 * Tailwind Classes
 */
const btnWrap = `inline-flex`;

/**
 * @param {object}  Omit<IButton, 'clickHandler'>
 * @returns JSX.Element
 */
const BaseButton = ({
  buttonText,
  colorScheme,
  size,
  hoverColorScheme,
  iconName,
  iconIsLeft,
  shiftIconOnHover,
  'data-testid': dataTestId,
}: Omit<IButton, 'clickHandler'>) => {
  const iconDirection = iconIsLeft ? 'flex-row-reverse' : '';
  const hoverIconAnimation = shiftIconOnHover
    ? Styles['shift-icon-on-hover']
    : '';
  const buttonHoverColorScheme = hoverColorScheme
    ? Styles[`hover-${hoverColorScheme}`]
    : '';

  return (
    <span
      className={
        Styles['bs-button'] +
        ' ' +
        Styles[colorScheme] +
        ' ' +
        buttonHoverColorScheme +
        ' ' +
        Styles[size] +
        ' ' +
        iconDirection +
        ' ' +
        hoverIconAnimation +
        ` group relative cursor-pointer overflow-hidden inline-flex gap-[1rem] items-center justify-center capitalize`
      }
      data-testid={dataTestId}
    >
      <span>{buttonText}</span>
      {iconName && (
        <span className={`${Styles['bs-btn-icon']}`}>
          <IconStore iconName={iconName} />
        </span>
      )}
      <span className={`absolute ${Styles['bs-button-bg']} inset-0`}></span>
    </span>
  );
};

// Normal Button
const Button = (props: IButton) => {
  return (
    <span className={btnWrap} onClick={(e) => props?.clickHandler(e)}>
      <BaseButton {...props} />
    </span>
  );
};

// Redirect Button
Button.RedirectButton = (props: IRedirectButton) => {
  return (
    <Link href={props.link} passHref>
      <a className={btnWrap} target={props.linkOpenNewTab ? '_blank' : '_self'}>
        <BaseButton {...props} />
      </a>
    </Link>
  );
};

export default Button;
