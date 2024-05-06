import Image from 'next/image';
import { IAuthor, UserIconSizeEnum } from '@src/types/compound';
import Styles from './index.module.scss';
import IconStore from '@src/components/root/_icons';
import { IconEnum } from '@src/types/root';

/**
 * @param {object} IAuthor
 * @returns JSX.Element
 */
const Author = ({ author: { name, designation, imageUrl } }: IAuthor) => {
  return (
    <div className="inline-flex items-center gap-2 md:gap-4">
      <div
        className={`${Styles['image-wrapper']} inline-grid place-items-center  md:w-[96px] md:h-[96px] w-[40px] h-[40px] rounded-full overflow-hidden border-[.125rem] md:border-[.25rem]`}
      >
        {imageUrl && (
          <Image
            className={`${Styles['image']}`}
            src={imageUrl}
            alt={`authorImage`}
            objectFit={`cover`}
            width={UserIconSizeEnum.width}
            height={UserIconSizeEnum.height}
            loading="lazy"
          />
        )}
        {!imageUrl && (
          <span className={`${Styles['user-icon']} text-[1rem] md:text-[3rem]`}>
            <IconStore iconName={IconEnum.UserAlt} />
          </span>
        )}
      </div>
      <div>
        <p
          className={`${Styles['name']} md:font-medium text-base md:text-[1.25rem] capitalize`}
        >
          {name}
        </p>
        <p className={`text-black text-sm md:text-base`}>{designation}</p>
      </div>
    </div>
  );
};

export default Author;
