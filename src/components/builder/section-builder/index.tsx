import {
  ISanityListSection,
  ISanityTestimonialSection,
} from '@src/types/sanity';
import ListSectionBuilder from './list-section';
import TestimonialSectionBuilder from './testimonial';

interface Props {
  data: [ISanityListSection, ISanityTestimonialSection];
}

export default function SectionsBuilder({ data }: Props) {
  return (
    <>
      {data.map((content, index: number) => {
        switch (content._type) {
          case 'listSection':
            return (
              <ListSectionBuilder data={content} key={content._type + index} />
            );
          case 'testimonialSection':
            return (
              <TestimonialSectionBuilder
                data={content}
                key={content._type + index}
              />
            );
          default:
            return <></>;
        }
      })}
    </>
  );
}
