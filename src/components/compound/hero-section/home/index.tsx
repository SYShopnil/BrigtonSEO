import Image from 'next/image';
import { IconEnum } from '@src/types/root';
import {
  IEventInfo,
  IHeroHome,
  IHeroLogo,
  IInfoCount,
} from '@src/types/compound';
import IconStore from '@src/components/root/_icons';
import {
  heroHeadingStyle,
  heroSectionParentStyle,
} from '../tailwind-common-classes';
import Styles from './index.module.scss';
import vectorImage from '@root/public/assets/images/hero-bg-vector-1.png';
import { useRef, useEffect } from 'react';
/**
 * Tailwind Classess
 */

/**
 * Used for - subTitle, evnetInfo label
 */
const mediumText = `block text-[1.25rem] font-medium leading-[1.5]  tracking-[0.031em] lg:text-[1.75rem] lg:leading-[1.3] lg:font-bold lg:tracking-normal`;

/**
 * Used for - eventInfoList, infoCountList parent
 */
const inlineFlex = `inline-flex items-center flex-wrap`;

/**
 * @param {object}  IEventInfoList
 * @returns JSX.Element
 */
const EventInfoList = ({ date, location }: IEventInfo) => {
  const { startDate, isOneDay, month, year } = date;
  const { name, googleMapUrl } = location;

  /**
   * Cases:
   * 1. If startDate 7 and isOneDay true then return 7th
   * 2. If startDate 7 and isOneDay false then return 7th & 8th
   */
  const eventDate = `${
    isOneDay
      ? startDate + 'th'
      : startDate + 'th' + ' & ' + (startDate + 1) + 'th'
  } ${month} ${year}`;

  /**
   * Styles
   */
  const eventInfoItem = `${Styles['event-info-item']}`;
  const eventInfoIcon = `${Styles['event-info-icon']} text-[1.25rem] lg:text-[2rem]`;
  const infoLabel = `${mediumText} underline pl-[1.75rem] lg:pl-[3rem]`;

  return (
    <div className={`${inlineFlex} gap-[.5rem_2.5rem]`}>
      <div className={eventInfoItem}>
        <div className={eventInfoIcon}>
          <IconStore iconName={IconEnum.CalendarEventFill} />
        </div>
        {/*TODO: Need Update*/}
        <div className={infoLabel}>{eventDate}</div>
      </div>
      <div className={eventInfoItem}>
        <div className={eventInfoIcon}>
          <IconStore iconName={IconEnum.MapPinFill} />
        </div>
        <a
          href={googleMapUrl}
          target="_blank"
          rel="noreferrer"
          className={infoLabel}
        >
          {name}
        </a>
      </div>
    </div>
  );
};

interface IInfoCountList {
  infoCount: IInfoCount[];
}
/**
 * @param {object}  IInfoCountList
 * @returns JSX.Element
 */
const InfoCountList = ({ infoCount }: IInfoCountList) => {
  return (
    <div className={`${inlineFlex}  gap-[2.5rem]`}>
      {infoCount.map(({ number, title, isExact, theme }, index) => (
        <div
          key={index}
          className={` ${Styles['info-count-circle']} ${Styles[theme]} relative grid place-items-center w-[140px] h-[140px]`}
        >
          <div>
            <span className="absolute text-[8.75rem] inset-0 w-full h-full z-[-1]">
              <IconStore iconName={IconEnum.EventInfoCircle} />
            </span>

            {/*
             * if number > 99, always shown 99+ , Even if exact===true, it will be 99+
             */}
            <div className="text-[3rem] font-bold leading-[1] inline-flex items-center">
              <span>
                {number > 99 ? '99' : number > 9 ? number : `0${number}`}
              </span>
              {(!Boolean(isExact) || number > 99) && (
                <span className="text-[2rem] leading-[1] block relative top-[-3px]">
                  <IconStore iconName={IconEnum.FilledPlus} />
                </span>
              )}
            </div>

            <div className="text-[1.25rem] leading-[1] tracking-[0.031em] mt-1">
              {title}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

/**
 * @param {object}  IHeroLogo
 * @returns JSX.Element
 */
const HeroLogo = ({ title, image }: IHeroLogo) => {
  return (
    <div className="mt-8 lg:mt-12">
      <div className="text-[1.25rem] font-medium lg:text-[1.75rem] mb-3 lg:mb-4">
        {title}
      </div>
      <div>
        <Image
          className="rounded-[.625rem]"
          src={`${image.url}`}
          alt={`${title}`}
          width={image.width}
          height={image.height}
        />
      </div>
    </div>
  );
};

/**
 * @param {object}  IHeroHome
 * @returns JSX.Element
 */
export const HeroHome = ({
  hasVector,
  bgVideoUrl,
  subTitle,
  title,
  description,
  logo,
  eventInfo,
  infoCount,
}: IHeroHome) => {
  /**
   * Play the video once its loaded. We CANNOT set autoplay on our
   * video element because the browser will try to load the video immediately.
   * We have to wait for the video to be done loading and then play it using
   * our reference.
   */
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <section
      data-testid="hero-home"
      className={`${heroSectionParentStyle}  text-white bg-primaryLightGradient`}
    >
      <video
        ref={videoRef}
        muted
        loop
        className={`absolute z-[-1]  inset-0  w-full h-full object-cover`}
        preload="none"
      >
        <source src={bgVideoUrl} type="video/mp4" />
      </video>

      {/* hero-overlay */}
      <span
        className={`${Styles['hero-overlay']} absolute inset-0 z-[1]`}
      ></span>

      {/* hero bg vector here */}
      {hasVector && (
        <div className="absolute inset-0 z-[1]">
          <Image
            src={vectorImage}
            layout="fill"
            alt={'hero-bg-vector-1'}
            objectFit="cover"
            loading="lazy"
          />
        </div>
      )}

      <div className="container">
        <div className="xl:max-w-[1145px] mx-auto md:text-center">
          <div className="relative z-50">
            {subTitle && (
              <div className={`${mediumText} mb-2 lg:mb-4`}>{subTitle}</div>
            )}

            <h1 className={`${heroHeadingStyle}`}>{title}</h1>

            {eventInfo && Object.keys(eventInfo).length > 0 && (
              <div className={`mt-4`}>
                <EventInfoList {...eventInfo} />
              </div>
            )}

            {description && (
              <p
                className={`hidden lg:block text-inherit text-[1.25rem] max-w-[880px] mx-auto mt-10`}
              >
                {description}
              </p>
            )}

            {infoCount && infoCount?.length > 0 && (
              <div className={`mt-10 hidden lg:block`}>
                <InfoCountList infoCount={infoCount} />
              </div>
            )}

            {logo && Object.keys(logo).length > 0 && <HeroLogo {...logo} />}
          </div>
        </div>
      </div>
    </section>
  );
};
