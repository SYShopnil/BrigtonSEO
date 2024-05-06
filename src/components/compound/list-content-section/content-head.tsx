import { PortableText } from '@portabletext/react';
import { SectionHeadingColorschemesEnum } from '@src/types/root';
import { IContentHead, SectionThemeEnum } from '@src/types/compound';
import { SectionHeading } from '@src/components/root';
import Styles from './index.module.scss';

interface IProps extends IContentHead {
  isDefaultBg: boolean;
  sectionTheme: SectionThemeEnum;
}

/**
 * @param {object}  IContentHead
 * @returns JSX.Element
 */
export const ContentHead = ({
  isDefaultBg,
  sectionHeading,
  description,
  sectionTheme,
}: IProps) => {
  //  section heading color scheme based on section theme
  const sectionHeadingColorScheme =
    sectionTheme === SectionThemeEnum.Blue
      ? SectionHeadingColorschemesEnum.Blue
      : SectionHeadingColorschemesEnum.Skyblue;
  return (
    <div className={`${Styles['content-head']}`}>
      <SectionHeading
        {...sectionHeading}
        hasBottomSpacing
        isCenter={false}
        colorScheme={
          isDefaultBg
            ? sectionHeadingColorScheme
            : SectionHeadingColorschemesEnum.White
        }
      />

      <PortableText value={description} />
    </div>
  );
};
