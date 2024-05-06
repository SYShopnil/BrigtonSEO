/**
 * External Imports
 */
import Image from 'next/image';
/**
 * Internal Imports
 */
import { HeroBgColorEnum, IHeroGeneral } from '@src/types/compound';
import {
  ButtonColorSchemeEnum,
  ButtonSizeEnum,
  IconEnum,
} from '@src/types/root';
import { Button } from '@src/components/root';
import { BannerShape } from './banner-shape';

// styles
import Styles from './index.module.scss';
import {
  heroSectionParentStyle,
  heroHeadingStyle,
  heroDescriptionStyle,
} from '../tailwind-common-classes';

/**
 *
 * @param {object}  IHeroGeneral
 * @returns JSX.Element
 */
export const HeroGeneral = ({
  bgColor,
  title,
  description,
  button,
  image,
  isBottomAligned,
  hasVector,
}: IHeroGeneral) => {
  return (
    <section
      className={`${Styles['banner-section']} ${
        Styles[`${bgColor}`]
      } ${heroSectionParentStyle} ${
        image?.slug ? Styles['content-with-img'] : Styles['content-without-img']
      } ${
        image?.slug && isBottomAligned
          ? Styles['img-bottom-align']
          : Styles['img-center-align']
      }`}
    >
      {/* for banner shape */}
      {hasVector && <BannerShape />}

      {/* container */}
      <div className="container">
        <div className={`${Styles['content-wrapper']}`}>
          <div
            className={`${Styles['banner-content']} relative z-50 lg:pt-[4rem]`}
          >
            <h1 className={`${heroHeadingStyle}`}>{title}</h1>
            <p className={`${heroDescriptionStyle} mt-[1.5rem] lg:mt-[2.5rem]`}>
              {description}
            </p>

            {/* button wrapper */}
            {button?.buttonText && (
              <div className="mt-[1.5rem] lg:mt-[3.5rem]">
                <Button.RedirectButton
                  {...button}
                  colorScheme={
                    bgColor === HeroBgColorEnum.GBlueLight
                      ? ButtonColorSchemeEnum.WhiteBgTextBlue
                      : ButtonColorSchemeEnum.WhiteBgTextSkyblue
                  }
                  hoverColorScheme={
                    bgColor === HeroBgColorEnum.GBlueLight
                      ? ButtonColorSchemeEnum.GhostBgTextBlue
                      : ButtonColorSchemeEnum.GhostBgTextSkyblue
                  }
                  size={ButtonSizeEnum.Medium}
                  iconName={IconEnum.ArrowRightLine}
                  shiftIconOnHover
                  data-testid="hero-button"
                />
              </div>
            )}
          </div>

          {/* banner image here */}
          {image?.slug && (
            <div className={`${Styles['banner-img']}`}>
              <Image
                src={`${image?.slug}`}
                width={image?.width}
                height={image?.height}
                alt={image?.alt}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
