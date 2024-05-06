import { SectionHeading, Swiper, SwiperItem } from '@src/components/root';
import { ITestimonialSection, SectionThemeEnum } from '@src/types/compound';
import { SectionHeadingColorschemesEnum } from '@src/types/root';
import { Testimonial } from '@src/components/compound';
import Styles from './index.module.scss';
/**
 * @param {object} ITestimonialSection
 * @returns JSX.Element
 */
export const TestimonialSection = ({
  sectionHeading,
  testimonials,
  sectionTheme,
}: ITestimonialSection) => {
  //  section heading color scheme based on section theme
  const sectionHeadingColorScheme =
    sectionTheme === SectionThemeEnum.Blue
      ? SectionHeadingColorschemesEnum.Blue
      : SectionHeadingColorschemesEnum.Skyblue;
  return (
    <section
      className={`section-padding-primary ${Styles['testimonial-section']} bg-gray`}
      data-testid="testimonial-section"
    >
      <div className="container">
        <SectionHeading
          {...sectionHeading}
          colorScheme={sectionHeadingColorScheme}
          hasBottomSpacing={true}
          isCenter={false}
        />
      </div>
      {testimonials && testimonials.length > 0 && (
        <Swiper
          haveOffset
          showItems={{
            sm: 1.2,
            md: 1.4,
            lg: 1.5,
            xl: 1.8,
            '2xl': 2.1,
          }}
          spaceBetween={{
            sm: 16,
            md: 24,
            lg: 24,
            xl: 0,
            '2xl': 0,
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperItem key={index}>
              {({ isActive }) => (
                <Testimonial {...testimonial} isActive={isActive} />
              )}
            </SwiperItem>
          ))}
        </Swiper>
      )}
    </section>
  );
};
