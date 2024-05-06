import { ICourseCard, TagBackgroundEnum } from '@src/types/compound';

export const courseCardData: ICourseCard = {
  imgUrl:
    'https://res.cloudinary.com/dktw59lc2/image/upload/v1668519711/BrightonSEO/Courses/Course2_rdurxb.png',
  tags: [
    {
      tagTitle: 'Brighton',
      tagColor: TagBackgroundEnum.primary,
    },
    {
      tagTitle: 'paid',
      tagColor: TagBackgroundEnum.secondary,
    },
    {
      tagTitle: 'author',
      tagColor: TagBackgroundEnum.success,
    },
    {
      tagTitle: 'offline',
      tagColor: TagBackgroundEnum.warning,
    },
  ],
  title: 'Best Beginners SEO Training Course',
  courseUrl: '',
  author: 'John Doe',
  price: {
    sellPrice: '850',
    discountPrice: '756',
    discountName: 'Early bird',
  },
  isOffline: false,
};
