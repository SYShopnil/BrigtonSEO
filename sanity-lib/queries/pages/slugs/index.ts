export const slugs = `
  *[_type == $type && slug.current == $slug][0] {
    "slug": slug.current
  }
`;
