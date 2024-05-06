import { usePreview } from '@sanity-lib/preview';
import HomePageBuilder from './index';
import { homePageQuery } from '@root/sanity-lib/queries/pages';

interface PropType {
  token: string;
}

export default function PreviewHomePageBuilder({ token }: PropType) {
  const data = usePreview(token, homePageQuery);
  return <HomePageBuilder data={data} />;
}
