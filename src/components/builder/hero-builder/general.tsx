import { HeroGeneral } from '@src/components/compound';
import urlFor from '@sanity-lib/image-builder';
import { IGeneralHero } from '@src/types/sanity';

interface Props {
  data: IGeneralHero;
}

export default function GeneralHeroBuilder({ data }: Props) {
  /**
   * If hasImage is true then image properties exist in data
   */
  let image = undefined;
  if (data.hasImage && data.image) {
    const imageData = data.image;
    image = {
      slug: urlFor(imageData.image, 650, 700),
      alt: imageData.alt,
      width: 650,
      height: 700,
    };
  }

  /**
   * If hasCTA is true then cta properties exist in data
   */
  let cta = undefined;
  if (data.hasCTA && data.cta) {
    const ctaData = data.cta;
    cta = {
      buttonText: ctaData.ctaTitle,
      link: ctaData.ctaLink,
      linkOpenNewTab: ctaData.ctaOpenNewTab,
    };
  }
  return (
    <HeroGeneral
      bgColor={data.bgColor}
      image={image}
      title={data.title}
      description={data.description}
      button={cta}
      isBottomAligned={data.isBottomAligned}
      hasVector={data.hasVector}
    />
  );
}
