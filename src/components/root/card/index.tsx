/**
 * Internal Imports
 */
import { ICard } from '@src/types/root';
import Styles from './card.module.scss';

/**
 * Props
 */
interface Props extends ICard {
  children: JSX.Element;
}

/**
 *
 * @param {object}  Props
 * @returns JSX.Element
 * @description This component is a root card component which take a children component and render those here.
 */
export const Card = ({
  children,
  dataTestId,
  cardBorderRadius,
  cardShadow,
  hoverCardShadow,
}: Props) => {
  return (
    <div
      className={`relative overflow-hidden bg-white ${Styles['card']} ${
        Styles[cardBorderRadius]
      } ${Styles[cardShadow]} ${
        hoverCardShadow ? Styles[`hover-${hoverCardShadow}`] : ''
      }`}
      data-testid={`${dataTestId}`}
    >
      {children}
    </div>
  );
};
