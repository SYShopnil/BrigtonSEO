import { PortableTextComponents } from '@portabletext/react';

/**
 * Please see this link for all components https://www.npmjs.com/package/@portabletext/react
 */
export const CustomComponents: PortableTextComponents = {
  /**
   * We grab a component type, mark etc and define how that will be translated to html.
   */

  /**
   * Blocks are top level objects in a portable text array. We look at the style attribute
   * of a block to determine how it should be rendered. Default style is "normal" which is rendered
   * as <p></p>
   */
  block: {
    h1: ({ children }) => <h1 className="text-2xl">{children}</h1>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-purple-500">{children}</blockquote>
    ),
    customHeading: ({ children }) => (
      <h2 className="text-lg text-primary">{children}</h2>
    ),
  },

  /**
   * Now we look at types of object contained as children of a block element
   */
  types: {
    figure: ({ value }) => (
      <figure>
        <img src={value.image._sanityAsset} />
        <figcaption>{value.caption}</figcaption>
      </figure>
    ),
    callToAction: ({ value, isInline }) =>
      isInline ? (
        <a href={value.url}>{value.text}</a>
      ) : (
        <div className="callToAction">{value.text}</div>
      ),
    code: ({ value }) => <code>{value.text}</code>,
  },

  /**
   * Marks are inline stylings (bold, emphasis, italic) for text and links.
   */
  marks: {
    link: ({ children, value }) => {
      const rel = !value.href.startsWith('/')
        ? 'noreferrer noopener'
        : undefined;
      return (
        <a href={value.href} rel={rel}>
          {children}
        </a>
      );
    },
  },

  list: {
    bullet: ({ children }) => <ul className="mt-xl">{children}</ul>,
    number: ({ children }) => <ol className="mt-lg">{children}</ol>,
    checkmarks: ({ children }) => (
      <ol className="m-auto text-lg">{children}</ol>
    ),
  },

  listItem: {
    bullet: ({ children }) => (
      <li style={{ listStyleType: 'disclosure-closed' }}>{children}</li>
    ),
    checkmarks: ({ children }) => <li>✅ {children}</li>,
  },
};
