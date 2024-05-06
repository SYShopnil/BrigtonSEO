/**
 * This story enables controls in storybook where user can
 * change props and see how the component reacts
 */

import { CourseCard as CourseMainCard } from '@src/components/compound';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TagBackgroundEnum } from '@src/types/compound/card/course';

export default {
  title: 'Components/Compound/Card/CourseCard',
  component: CourseMainCard,
  argTypes: {},
} as ComponentMeta<typeof CourseMainCard>;

const Template: ComponentStory<typeof CourseMainCard> = (args) => (
  <div className="bg-body py-[4rem] lg:py-[5rem]">
    <div className="container">
      <div className="max-w-[425px]">
        <CourseMainCard {...args} />
      </div>
    </div>
  </div>
);

export const CourseCard = Template.bind({});
CourseCard.args = {
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
