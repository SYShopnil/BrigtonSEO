import React, { useState } from 'react';
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
export { SwiperSlide as SwiperItem } from 'swiper/react';
import { useIsDomReady, useViewport, useOffset } from '@src/hooks';
import { ISwiperProps, IBreakpoints } from '@src/types/root';
import Styles from './index.module.scss';

// Inject Autoplay
SwiperCore.use([Autoplay]);

/**
 * default values
 */
const AUTOPLAY_DELAY = 4; // in seconds;
const SPACE_BETWEEN: IBreakpoints = {
  sm: 12,
  md: 16,
  lg: 20,
  xl: 24,
  '2xl': 24,
};
const SHOW_ITEMS: IBreakpoints = {
  sm: 1.2,
  md: 2,
  lg: 3,
  xl: 4,
  '2xl': 4,
};

/**
 * @param {object} ISwiperProps
 * @returns JSX.Element | null
 */
const Carousel = ({
  autoItemCount = false,
  children,
  isLoop = false,
  isCenter = false,
  autoPlay = false,
  pauseOnHover = false,
  haveOffset = false,
  spaceBetween = SPACE_BETWEEN,
  showItems = SHOW_ITEMS,
  className = '',
  speed = 800,
}: ISwiperProps): JSX.Element | null => {
  const [isDraggging, setIsDragging] = useState<boolean>(false);

  // custom hooks
  const { container } = useViewport();
  const offset = useOffset();

  /**
   * Used for - react hydration.
   * https://nextjs.org/docs/messages/react-hydration-error
   */
  const isDomReady = useIsDomReady();

  // autoplay
  const autoplaySettings = {
    delay: AUTOPLAY_DELAY * 1000,
    disableOnInteraction: false,
    pauseOnMouseEnter: pauseOnHover,
  };

  // check isDomReady
  if (!isDomReady) return null;

  // style implement for offset layout
  let style = {};
  if (haveOffset) style = { paddingLeft: offset, paddingRight: offset };

  /**
   * Tailwind & Module Classes
   */

  // swiperMainWrapper
  const swiperMainWrapper = `swiper-main-wrapper ${
    Styles['swiper-main-wrapper']
  } ${isDraggging ? Styles['cursor-dragging'] : Styles['cursor-drag']}`;
  // swiperContainer
  const swiperContainer = `swiper-main-container ${className}`;

  return (
    <div className={swiperMainWrapper}>
      <Swiper
        style={style}
        speed={speed}
        loop={isLoop}
        autoplay={autoPlay && autoplaySettings}
        centeredSlides={isCenter}
        slidesPerView={autoItemCount ? 'auto' : showItems[container]}
        spaceBetween={spaceBetween[container]}
        onTouchStart={() => {
          setIsDragging(true);
        }}
        onTouchEnd={() => {
          setIsDragging(false);
        }}
        className={swiperContainer}
      >
        {children}
      </Swiper>
    </div>
  );
};

export default Carousel;
