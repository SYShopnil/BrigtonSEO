import { IListContentSection } from '@src/types/compound';
import { ContentList } from './content-list';
import { ContentHead } from './content-head';
import Styles from './index.module.scss';

/**
 * @param {object} IListContentSection
 * @returns JSX.Element
 */
export const ListContentSection = ({
  isDefaultBg,
  contentHeading,
  contentList,
  listStyle,
  button,
  sectionTheme,
}: IListContentSection) => {
  return (
    <section
      data-testid="list-content-section"
      className={`section-padding-primary ${Styles[`list-content-section`]} ${
        isDefaultBg ? Styles['body'] : Styles['gSkyblueLight']
      } ${sectionTheme ? Styles[sectionTheme] : ''}`}
    >
      <div className="container">
        {/* row  */}
        <div className="lg:flex lg:justify-between grid max-md:gap-[3.125rem]">
          {/* left content */}
          <div className="lg:flex-[0_0_44%]">
            <div className="lg:sticky lg:top-[7.5rem]">
              <ContentHead
                {...contentHeading}
                isDefaultBg={isDefaultBg}
                sectionTheme={sectionTheme!}
              />
            </div>
          </div>

          {/* right content */}
          <div className="lg:flex-[0_0_48%]">
            <ContentList
              contentList={contentList}
              listStyle={listStyle}
              button={button!}
              isDefaultBg={isDefaultBg}
              sectionTheme={sectionTheme!}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
