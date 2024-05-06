import { ISanityImage } from './../general/index';

/**
 * This is not a complete representation of the Sanity Testimonial type, because
 * a complete type definition is not necessary for our frontend.
 */

export interface ISanityTestimonial {
  text: string;
  author: string;
  authorDesignation: string;
  image?: ISanityImage;
}
