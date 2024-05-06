import { ISanitySectionTheme } from './../../general';
import { ISanityTestimonial } from '../../testimonial';

export interface ISanityTestimonialSection {
  _type: 'testimonialSection';
  category: string;
  testimonials: ISanityTestimonial[];
  title: string;
  subtitle: string;
  sectionTheme: ISanitySectionTheme;
}
