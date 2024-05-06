import { ISanityTestimonial } from './../testimonial/index';
import { ISanitySocialLinks, ISanityImage } from './../general/index';

export interface ISanityPerson {
  fullName: string;
  hasPage: boolean;
  slug: string;
  designation: string;
  description: string;
  socialLinks: ISanitySocialLinks[];
  image: ISanityImage;
  isFringeSpeaker: boolean;
  isBrightonSpeaker: boolean;
  isTrainer: boolean;
  isTeamMember: boolean;
  testimonials: ISanityTestimonial;
}
