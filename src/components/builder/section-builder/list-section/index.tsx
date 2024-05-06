import { ListContentSection } from '@src/components/compound';
import { IListContentSection } from '@src/types/compound';
import { ISanityListSection } from '@src/types/sanity';
interface Props {
  data: ISanityListSection;
}

export default function ListSectionBuilder({ data }: Props) {
  let cta = undefined;
  if (data.hasCTA && data.cta) {
    cta = {
      buttonText: data.cta.ctaTitle,
      link: data.cta.ctaLink,
      linkOpenNewTab: data.cta.ctaOpenNewTab,
    };
  }

  const listProps: IListContentSection = {
    sectionTheme: data.sectionTheme?.theme,
    isDefaultBg: data.isBackgroundDefault,
    contentHeading: {
      sectionHeading: {
        title: data.heading,
        subTitle: data.subTitle,
      },
      description: data.description,
    },
    contentList: data.listItems,
    listStyle: data.listBulletType,
    button: cta,
  };

  return <ListContentSection {...listProps} />;
}
