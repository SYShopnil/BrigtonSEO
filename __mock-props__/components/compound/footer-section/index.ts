import { IFooterSection } from '@src/types/compound';
import { IconEnum } from '@src/types/root';

export const footerSectionData: IFooterSection = {
  headingInfo: {
    title: 'Want something extra?',
    subTitle: 'Subscribe to newsletter',
    buttonText: 'Subscribe',
    buttonLink: '/subscribe',
    linkOpenNewTab: false,
  },
  contactInfo: {
    address:
      'c/o SiteVisibility, Plus X Innovation Hub, Lewes Road Brighton, BN2 4GL - 01273 805525',
    phoneNumberOne: '+965 6554 6598',
    phoneNumberTwo: '+965 6554 6599',
    email: 'brightonseo@gmail.com',
  },
  columnOne: {
    title: 'Company',
    linkFields: [
      {
        label: 'About Us',
        url: '/about-us',
      },
      {
        label: 'Tickets',
        url: '/tickets',
      },
      {
        label: 'Speakers',
        url: '/speakers',
      },
      {
        label: 'Training',
        url: '/training',
      },
      {
        label: 'Sponsors',
        url: '/sponsors',
      },
      {
        label: 'Career',
        url: '/career',
      },
      {
        label: 'Contact',
        url: '/contact',
      },
    ],
  },
  columnTwo: {
    title: 'Support',
    linkFields: [
      {
        label: 'FAQs',
        url: '/faqs',
      },
      {
        label: 'Code of Conduct',
        url: '/code-of-conduct',
      },
      {
        label: 'Privacy Policy',
        url: '/privacy-policy',
      },
      {
        label: 'Terms & Conditions',
        url: '/terms-and-conditions',
      },
      {
        label: 'Unsubscribe',
        url: '/unsubscribe',
      },
    ],
  },
  socialColumn: {
    title: 'Follow Us',
    socialLinks: [
      {
        platform: IconEnum.Facebook,
        url: 'https://www.facebook.com',
      },
      {
        platform: IconEnum.Twitter,
        url: 'https://www.twitter.com',
      },
      {
        platform: IconEnum.Instagram,
        url: 'https://www.instagram.com',
      },
      {
        platform: IconEnum.Youtube,
        url: 'https://www.youtube.com',
      },
    ],
  },
};
