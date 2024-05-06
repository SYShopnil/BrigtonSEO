/**
 * This story enables controls in storybook where user can
 * change props and see how the component reacts
 */

/**
 * External Imports
 */

import { Swiper, SwiperItem } from '@src/components/root';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Image from 'next/image';

/**
 * Internal Imports
 */
import { swiperPreviewimages } from '@root/__mock-props__/components/root/swiper';

export default {
  title: 'Components/Root/Carousel',
  component: Swiper,
  argTypes: {
    haveOffset: {
      control: 'boolean',
      description: 'Not for container view',
    },
    isCenter: { control: 'boolean' },
    isLoop: { control: 'boolean' },
    autoPlay: {
      control: 'boolean',
      description:
        'When options update, need to reload. For Better view, Please apply in react/next app',
    },
    spaceBetween: { disable: true },
    showItems: { disable: true },
    className: { disable: true },
    speed: { control: 'number' },
    pauseOnHover: { disable: true },
  },
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Swiper>;

/**
 * Template
 */
const Template: ComponentStory<typeof Swiper> = (args) => (
  <div className="section-padding-primary bg-body">
    <Swiper {...args}>
      {swiperPreviewimages?.map((image, index) => (
        <SwiperItem key={index}>
          <Image
            src={`${image}`}
            alt={`image-${index}`}
            width={1920}
            height={1080}
            loading="lazy"
            objectFit="cover"
          />
        </SwiperItem>
      ))}
    </Swiper>
  </div>
);
/**
 * ContainerTemplate
 */
const ContainerTemplate: ComponentStory<typeof Swiper> = (args) => (
  <div className="section-padding-primary bg-body">
    <div className="container">
      <Swiper {...args}>
        {swiperPreviewimages?.map((image, index) => (
          <SwiperItem key={index}>
            <Image
              src={`${image}`}
              alt={`image-${index}`}
              width={960}
              height={720}
            />
          </SwiperItem>
        ))}
      </Swiper>
    </div>
  </div>
);

/**
 * Common Options
 */
const options = {
  isCenter: false,
  isLoop: false,
  autoPlay: false,
  speed: 800,
};

/**
 * OffsetView
 */
export const OffsetView = Template.bind({});
OffsetView.args = {
  haveOffset: true,
  ...options,
};

/**
 * FullWidthView
 */
export const FullWidthView = Template.bind({});
FullWidthView.args = {
  haveOffset: false,
  ...options,
};

/**
 * ContainerView
 */
export const ContainerView = ContainerTemplate.bind({});
FullWidthView.args = {
  haveOffset: false, // not for these type of layouts
  ...options,
};
