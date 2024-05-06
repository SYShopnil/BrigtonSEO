import { SectionHeading, Swiper, SwiperItem } from '@src/components/root';
import { useIsDomReady, useViewport } from '@src/hooks';
import { IImageAccordion, SectionThemeEnum } from '@src/types/compound';
import { SectionHeadingColorschemesEnum } from '@src/types/root';
import Styles from './index.module.scss';
import { Card } from './card';
import { useState } from 'react';

/**
 *
 * @param {object}  IImageAccordion
 * @returns JSX.Element
 */
export const ImageAccordion = ({
  sectionHeading,
  cards,
  sectionTheme,
}: IImageAccordion) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { width } = useViewport();
  const isDomReady = useIsDomReady();

  //  section heading color scheme based on section theme
  const sectionHeadingColorScheme =
    sectionTheme === SectionThemeEnum.Blue
      ? SectionHeadingColorschemesEnum.Blue
      : SectionHeadingColorschemesEnum.Skyblue;

  /**
   * Tailwind classess
   */
  const accordionWrapper = `rounded-[.625rem] overflow-hidden`;

  return (
    <section
      className={`section-padding-primary bg-gray`}
      data-testid="image-accordion-section"
    >
      <div className="container">
        <div className="max-w-[986px]">
          <SectionHeading
            {...sectionHeading}
            colorScheme={sectionHeadingColorScheme}
            hasBottomSpacing={true}
            isCenter={false}
          />
        </div>

        {/* Carousel for mobile to tablet device */}
        {isDomReady && width <= 991 && (
          <div className={`${accordionWrapper}`}>
            <Swiper
              showItems={{ sm: 1.2, md: 2.2, lg: 2, xl: 3, '2xl': 4 }}
              spaceBetween={{ sm: 0, md: 0, lg: 0, xl: 0, '2xl': 0 }}
            >
              {cards.map((card, index) => (
                <SwiperItem key={index}>
                  {({ isActive }) => (
                    <Card {...card} isLarge={false} isActive={isActive} />
                  )}
                </SwiperItem>
              ))}
            </Swiper>
          </div>
        )}
      </div>

      {/* Image accordion for Large to Above Device  */}
      {isDomReady && width >= 992 && (
        <div className={`${Styles['custom-container']} container`}>
          <div
            className={`${accordionWrapper} ${Styles['image-accordion-grid']} image-accordion-grid`}
          >
            {cards.map((card, index) => (
              <Card
                onHover={() => {
                  setActiveIndex(index);
                }}
                key={index}
                {...card}
                isLarge={true}
                isActive={index === activeIndex}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};
