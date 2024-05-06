import { IImageAccordionCard } from '@src/types/compound';
import Image from 'next/image';
import Link from 'next/link';
import Styles from './index.module.scss';

interface IProps extends IImageAccordionCard {
  isActive: boolean;
  isLarge: boolean;
  onHover?: () => void;
}

/**
 *
 * @param {object}  IProps
 * @returns JSX.Element
 */
export const Card = ({
  image,
  title,
  link,
  description,
  isActive,
  isLarge,
  onHover,
}: IProps) => {
  /**
   * Tailwind classess
   */
  const titleText = `text-[1.5rem] font-semibold leading-[1.4] md:text-[1.75rem] text-white lg:text-[3rem] lg:font-bold lg:leading-[1.1]`;

  return (
    <div
      onMouseEnter={onHover}
      className={` ${isActive ? Styles['active'] : ''} ${
        isLarge ? Styles['large'] : Styles['small']
      }  ${Styles['card']}  relative overflow-hidden`}
    >
      {/* card overlay  */}
      <span
        className={`${Styles['card-overlay']} absolute inset-0 z-[1]`}
      ></span>
      <div className="inline-flex absolute w-full h-full">
        <Image src={image} alt={title} objectFit="cover" layout="fill" />
      </div>

      {/* only show for large card  */}
      {isLarge && (
        <h3 className={`${Styles['title-inactive']}  ${titleText}`}>
          <span>{title}</span>
        </h3>
      )}

      {/* some extra div taken for large card animation purpose */}
      <div
        className={`${Styles['content']} absolute left-0 bottom-0 p-4 lg:p-[3.75rem] z-10`}
      >
        <div className={`${Styles['content-inner']}`}>
          <div className={`${Styles['content-inner-inner']}`}>
            <h3 className={` ${Styles['title']} ${titleText}`}>
              <Link href={link}>
                <a>{title}</a>
              </Link>
            </h3>
            <p
              className={`${Styles['description']} text-sm lg:text-[1.125rem] lg:leading-[1.6] mt-4 text-white`}
            >
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
