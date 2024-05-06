import { ITestimonialSection, SectionThemeEnum } from '@src/types/compound';
import { testimonialData } from '../card';

export const testimonialSectionData: ITestimonialSection = {
  sectionTheme: SectionThemeEnum.Skyblue,
  sectionHeading: {
    subTitle: 'Our Testmonials',
    title: 'What People Say About Us',
  },
  testimonials: [
    {
      ...testimonialData,
    },
    {
      ...testimonialData,
    },
    {
      ...testimonialData,
    },
    {
      ...testimonialData,
    },
    {
      ...testimonialData,
    },
  ],
};
export const testimonialSectionBlueThemeData: ITestimonialSection = {
  sectionTheme: SectionThemeEnum.Blue,
  sectionHeading: {
    subTitle: 'Our Testmonials',
    title: 'What People Say About Us',
  },
  testimonials: [
    {
      ...testimonialData,
    },
    {
      ...testimonialData,
    },
    {
      ...testimonialData,
    },
    {
      ...testimonialData,
    },
    {
      ...testimonialData,
    },
  ],
};
