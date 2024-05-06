import urlFor from '@root/sanity-lib/image-builder';
import { TestimonialSection } from '@src/components/compound';
import {
  ITestimonial,
  ITestimonialSection,
  UserIconSizeEnum,
} from '@src/types/compound';
import { ISanityTestimonialSection } from '@src/types/sanity';

interface Props {
  data: ISanityTestimonialSection;
}

export default function TestimonialSectionBuilder({ data }: Props) {
  /**
   * We have map over the incoming testimonials to generate the image url
   * for each testimonial.
   */
  const formattedTestimonials: ITestimonial[] = data.testimonials.map(
    (testimonial) => ({
      author: {
        imageUrl: testimonial.image
          ? urlFor(
              testimonial.image.image,
              UserIconSizeEnum.width,
              UserIconSizeEnum.height
            )
          : undefined,
        name: testimonial.author,
        designation: testimonial.authorDesignation,
      },
      testimonial: testimonial.text,
    })
  );

  const testimonialSectionProps: ITestimonialSection = {
    sectionTheme: data.sectionTheme.theme,
    sectionHeading: {
      subTitle: data.subtitle,
      title: data.title,
    },
    testimonials: formattedTestimonials,
  };

  return <TestimonialSection {...testimonialSectionProps} />;
}
