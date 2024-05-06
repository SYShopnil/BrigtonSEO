import { footerFragment } from '@sanity-lib/queries/fragments';

export const homepage = `
{
   'page':*[_type == "homepage"][0]{
      ...,
      brightonEvent->,
      content[]->{
         ...,
         testimonials[]->
      }

   },
   'footer':${footerFragment}
}
`;
