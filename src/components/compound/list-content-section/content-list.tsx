import {
  IListContentCtaButton,
  IListItem,
  ListStyleEnum,
  SectionThemeEnum,
} from '@src/types/compound';
import {
  ButtonColorSchemeEnum,
  ButtonSizeEnum,
  IconEnum,
} from '@src/types/root';
import { Button } from '@src/components/root';
import { ListItem } from './list-item';
import Styles from './index.module.scss';
interface IProps {
  contentList: IListItem[];
  listStyle: ListStyleEnum;
  button: IListContentCtaButton;
  isDefaultBg: boolean;
  sectionTheme: SectionThemeEnum;
}

/**
 * @param {object}  IProps
 * @returns JSX.Element
 */
export const ContentList = ({
  contentList,
  button,
  listStyle,
  isDefaultBg,
  sectionTheme,
}: IProps) => {
  //  button color scheme based on section theme
  const buttonColorScheme =
    sectionTheme === SectionThemeEnum.Blue
      ? ButtonColorSchemeEnum.BlueBgTextWhite
      : ButtonColorSchemeEnum.SkyblueBgTextWhite;
  const buttonHoverColorScheme =
    sectionTheme === SectionThemeEnum.Blue
      ? ButtonColorSchemeEnum.BlueVerticalGradientBgTextWhite
      : ButtonColorSchemeEnum.SkyblueVerticalGradientBgTextWhite;

  return (
    <div className="grid gap-[2.5rem] lg:gap-[3.5rem]">
      {/* main list here */}
      <div
        className={`${Styles['hide-scrollbar']} ${Styles['list-wrapper']} max-md:overflow-x-auto`}
      >
        <div
          className={`gap-[2rem] lg:grid lg:gap-[3rem] max-md:block max-md:whitespace-nowrap`}
        >
          {contentList.map((listItem, index) => (
            <ListItem
              {...listItem}
              key={index}
              number={index + 1}
              listStyle={listStyle}
            />
          ))}
        </div>
      </div>

      {button?.buttonText && (
        <div>
          <Button.RedirectButton
            {...button}
            colorScheme={
              isDefaultBg
                ? buttonColorScheme
                : ButtonColorSchemeEnum.WhiteBgTextSkyblue
            }
            hoverColorScheme={
              isDefaultBg
                ? buttonHoverColorScheme
                : ButtonColorSchemeEnum.GhostBgTextSkyblue
            }
            size={ButtonSizeEnum.Medium}
            iconName={IconEnum.ArrowRightLine}
            data-testid="list-content-button"
          />
        </div>
      )}
    </div>
  );
};
