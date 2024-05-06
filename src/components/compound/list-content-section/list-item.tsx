import { PortableText } from '@portabletext/react';
import { IListItem, ListStyleEnum } from '@src/types/compound';
import IconStore from '@src/components/root/_icons';
import Styles from './index.module.scss';
interface IProps extends IListItem {
  listStyle: ListStyleEnum;
  number: number;
}

/**
 *
 * @param {object}  IProps
 * @returns JSX.Element
 */
export const ListItem = ({
  title,
  description,
  icon,
  number,
  listStyle,
}: IProps) => {
  return (
    <div
      className={`${Styles['list-item']} max-md:w-[75%] max-sm:w-[80%] max-md:inline-block max-md:align-top max-md:whitespace-normal`}
    >
      <div
        className={` ${Styles['list-item-head']} ${
          ListStyleEnum.Number === listStyle ? Styles['number'] : ''
        } ${ListStyleEnum.Icon === listStyle && icon ? Styles['icon'] : ''}`}
      >
        {/* for icon  */}
        {ListStyleEnum.Icon === listStyle && icon && (
          <span
            className={`${Styles['list-item-icon']} text-[1.5rem] md:text-[1.75rem] inline-flex items-center relative top-[-2px]`}
          >
            <IconStore iconName={icon} />
          </span>
        )}

        {/* for number  */}
        {ListStyleEnum.Number === listStyle && (
          <span className={`${Styles['list-item-number']} w-max text-sm`}>
            {`/${number > 9 ? number : `0${number}`}`}
          </span>
        )}

        <h3
          className={`${Styles['list-item-title']} text-[1.25rem] font-medium leading-[1.5] md:text-[1.25rem] md:font-semibold md:leading-[1.4]`}
        >
          {title}
        </h3>
      </div>

      <PortableText value={description} />
    </div>
  );
};
