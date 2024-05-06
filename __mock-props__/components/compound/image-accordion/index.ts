import {
  IImageAccordion,
  IImageAccordionCard,
  SectionThemeEnum,
} from '@src/types/compound';

export const imageAccordionCardData: IImageAccordionCard = {
  image:
    'https://res.cloudinary.com/dktw59lc2/image/upload/v1670331012/BrightonSEO/image-accordion/home/brightonseo_d4nh2j.png',
  title: 'BrightonSEO',
  link: 'https://www.google.com/',
  description:
    'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.',
};

export const imageAccordionCardsData: IImageAccordionCard[] = [
  { ...imageAccordionCardData },
  {
    ...imageAccordionCardData,
    title: 'Trainers',
    image:
      'https://res.cloudinary.com/dktw59lc2/image/upload/v1670331013/BrightonSEO/image-accordion/home/trainers_udeetj.png',
  },
  {
    ...imageAccordionCardData,
    title: 'Training Sessions',
    image:
      'https://res.cloudinary.com/dktw59lc2/image/upload/v1670331013/BrightonSEO/image-accordion/home/training-sessions_deaidv.png',
  },
  {
    ...imageAccordionCardData,
    title: 'London Training',
    image:
      'https://res.cloudinary.com/dktw59lc2/image/upload/v1670331012/BrightonSEO/image-accordion/home/london-training_ebqrhk.png',
  },
  {
    ...imageAccordionCardData,
    title: 'In-Company Training',
    image:
      'https://res.cloudinary.com/dktw59lc2/image/upload/v1670331012/BrightonSEO/image-accordion/home/in-company-training_ysgg2q.png',
  },
];

export const imageAccordionData: IImageAccordion = {
  sectionTheme: SectionThemeEnum.Blue,
  sectionHeading: {
    subTitle: 'About the events',
    title: 'Welcome to the Greatest SEO Conference 2022',
  },
  cards: imageAccordionCardsData,
};
