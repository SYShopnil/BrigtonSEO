import { IHeroHome, EventInfoThemeEnum } from '@src/types/compound';

export const heroHomeData: IHeroHome = {
  hasVector: true,
  bgVideoUrl:
    'https://brightonseo.com/wp-content/themes/brighton-seo/assets/images/bseo-into-video-longer-intro.mp4',
  subTitle: 'Largest Conference',
  title: 'Where search marketers go to hone their talents.',
  eventInfo: {
    date: {
      startDate: 6,
      isOneDay: false,
      month: 'Oct',
      year: 2022,
    },
    location: {
      name: 'The Brighton Centre, Brighton, UK',
      googleMapUrl: 'https://goo.gl/maps/TnWfy922GUNfJZfh7',
    },
  },
  infoCount: [
    {
      number: 22,
      title: 'Speakers',
      isExact: false,
      theme: EventInfoThemeEnum.Theme1,
    },
    {
      number: 40,
      title: 'Courses',
      isExact: false,
      theme: EventInfoThemeEnum.Theme2,
    },
    {
      number: 33,
      title: 'Sessions',
      isExact: false,
      theme: EventInfoThemeEnum.Theme3,
    },
    {
      number: 3,
      title: 'Parties',
      isExact: true,
      theme: EventInfoThemeEnum.Theme2,
    },
  ],
};

export const heroHomeFringeEventsData: IHeroHome = {
  hasVector: false,
  bgVideoUrl:
    'https://brightonseo.com/wp-content/themes/brighton-seo/assets/images/bseo-into-video-longer-intro.mp4',
  title: 'Fringe events',
  eventInfo: {
    date: {
      startDate: 4,
      isOneDay: true,
      month: 'Oct',
      year: 2022,
    },
    location: {
      name: 'The Brighton Centre, Brighton, UK',
      googleMapUrl: 'https://goo.gl/maps/TnWfy922GUNfJZfh7',
    },
  },
  description:
    'We also have a range of fringe events to help search marketers meet, learn and do their job a little bit better. These take place the day before the main brightonSEO conference.',
};

export const heroHomeTrainingData: IHeroHome = {
  hasVector: false,
  bgVideoUrl:
    'https://brightonseo.com/wp-content/themes/brighton-seo/assets/images/bseo-into-video-longer-intro.mp4',
  title: 'Book for an In Depth Training Course',
  description:
    'As well as running one of the world’s most popular search marketing conference, we also organise practical, hands-on and in-depth Analytics, PPC, SEO training courses and workshops so you can up-skill in a specific area of Search Marketing. ',
  logo: {
    title: 'expert training from anywhere in the world via',
    image: {
      url: 'https://res.cloudinary.com/dktw59lc2/image/upload/v1669292334/BrightonSEO/Hero/Online%20Academy%20Logo/logo-1_ocvlxe.png',
      width: 453,
      height: 88,
    },
  },
};
