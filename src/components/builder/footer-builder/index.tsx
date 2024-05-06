import { ISanityFooter } from '@src/types/sanity/footer';
import { FooterSection } from '@src/components/compound';

interface Props {
  data: ISanityFooter;
}

export default function FooterBuilder({ data }: Props) {
  const headingInfo = {
    title: data.ctaSectionTitle,
    subTitle: data.ctaSectionSubtitle,
    buttonText: data.cta.ctaTitle,
    buttonLink: data.cta.ctaLink,
    linkOpenNewTab: data.cta.ctaOpenNewTab,
  };

  const contactInfo = {
    address: data.address,
    phoneNumberOne: data.primaryPhone,
    phoneNumberTwo: data.secondaryPhone,
    email: data.email,
  };

  const columnOne = {
    title: data.columnOneTitle,
    linkFields: data.columnOneLinks,
  };

  const columnTwo = {
    title: data.columnTwoTitle,
    linkFields: data.columnTwoLinks,
  };

  const socialColumn = {
    title: data.socialColumnTitle,
    socialLinks: data.socialLinks,
  };

  return (
    <FooterSection
      headingInfo={headingInfo}
      contactInfo={contactInfo}
      columnOne={columnOne}
      columnTwo={columnTwo}
      socialColumn={socialColumn}
    />
  );
}
