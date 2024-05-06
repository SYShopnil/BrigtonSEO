import { ITestimonial } from '../card/testimonial';
import { SectionThemeEnum } from '../common';

interface ITestimonialSectionHeading {
  subTitle: string;
  title: string;
}
export interface ITestimonialSection {
  testimonials: ITestimonial[];
  sectionHeading: ITestimonialSectionHeading;
  sectionTheme: SectionThemeEnum;
}
