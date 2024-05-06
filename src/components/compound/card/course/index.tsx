// Internal Imports
import { ICourseCard, ITag } from '@src/types/compound';
import { Card } from '@src/components/root';
import { CardBorderRadiusEnum, CardShadowEnum } from '@src/types/root';
// Style Import
import Styles from './index.module.scss';
// Next Imports
import Image from 'next/image';
import Link from 'next/link';

const CourseCard = ({
  imgUrl,
  tags,
  title,
  courseUrl,
  author,
  price,
  isOffline,
}: ICourseCard) => {
  // Offline Label
  const offlineLabel = 'Offline';
  // Pound Sign
  const poundLabel = '£';
  // Checking Discounted Price Availability
  const discountPriceCheck = price.discountPrice;

  /**
   * @param {object} ITag
   * @returns JSX.Element
   * @description This component will receive ITag and will return a tag or several tags.
   */
  const Tag = ({ tagColor, tagTitle }: ITag) => {
    return (
      <span
        className={`${Styles['tagColor']} ${
          Styles[`${tagColor}`]
        } px-[.75rem] py-[.25rem] capitalize rounded text-white text-sm`}
      >
        {tagTitle}
      </span>
    );
  };

  return (
    <>
      <Card
        cardBorderRadius={CardBorderRadiusEnum['2XL']}
        cardShadow={CardShadowEnum.None}
        hoverCardShadow={CardShadowEnum.ShadowTwo}
        dataTestId="Course-card"
      >
        <div className={`${Styles['course-card']}`}>
          <div className="relative inline-flex justify-center">
            {isOffline && (
              <div className="absolute z-[100] md:px-8 px-4 md:py-2 py-1 bg-primary text-white capitalize rounded-b-md">
                <h6>{offlineLabel}</h6>
              </div>
            )}
            <div>
              <Link href={courseUrl}>
                <a target="_blank">
                  <Image src={imgUrl} alt={title} width={424} height={280} />
                </a>
              </Link>
            </div>
          </div>
          <div className="md:px-6 px-4 py-6">
            <div>
              <div className="inline-flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                  <Tag key={index} {...tag} />
                ))}
              </div>
              <div>
                <h3
                  className={`${Styles['card-title']} md:text-xl font-medium tracking-[0.031rem] text-lg transition-all text-black pt-[.75rem] md:min-h-[5rem] min-h-[4rem] text-ellipsis overflow-hidden`}
                >
                  <Link href={courseUrl}>
                    <a>{title}</a>
                  </Link>
                </h3>
                <p className="text-sm tracking-[0.031rem] pt-[.5rem] text-blackLight capitalize">
                  {author}
                </p>
              </div>
              <div className="flex flex-wrap pt-4">
                <div>
                  <p
                    className={`${
                      discountPriceCheck ? ['line-through'] : ['no-underline']
                    } text-xl pr-4 text-black`}
                  >
                    {poundLabel}
                    {price.sellPrice}
                  </p>
                </div>
                <div className="flex flex-wrap">
                  {discountPriceCheck && (
                    <p className="text-xl font-semibold text-primary">
                      {poundLabel}
                      {discountPriceCheck}
                    </p>
                  )}
                  {discountPriceCheck && price.discountName && (
                    <div className="flex flex-wrap items-center">
                      <span>/</span>
                      <p className="text-sm leading-[0.875rem] capitalize text-black">
                        {price.discountName}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};
/**
 * export default
 */
export default CourseCard;
