import { ITestimonial } from '@src/types/compound';

export const testimonialData: ITestimonial = {
  testimonial: `BrightonSEO's Local SEO Training with Greg Gifford is the perfect course to get you up to speed with all things local search, from review signals to link building, Google My Business to content creation, and much, much more.`,
  author: {
    imageUrl: `https://res.cloudinary.com/dktw59lc2/image/upload/v1668519707/BrightonSEO/Speakers/Krista_Seiden_lns8tl.png`,
    designation: `CM, BrightLocal`,
    name: `Stephanie Newton`,
  },
};

export const testimonialWithoutImageData: ITestimonial = {
  testimonial: `BrightonSEO's Local SEO Training with Greg Gifford is the perfect course to get you up to speed with all things local search, from review signals to link building, Google My Business to content creation, and much, much more.`,
  author: {
    designation: `CM, BrightLocal`,
    name: `Stephanie Newton`,
  },
};
