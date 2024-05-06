import { GetStaticProps } from 'next';
import { PreviewSuspense } from 'next-sanity/preview';
import { lazy } from 'react';
import { client, previewClient } from '@sanity-lib/client';
import { homePageQuery } from '@root/sanity-lib/queries/pages';
import { ParsedUrlQuery } from 'querystring';
import { Params } from 'next-sanity/preview';
import HomePageBuilder from '@src/components/builder/page-builder/home-page';
const PreviewHomePageBuilder = lazy(
  () => import('@src/components/builder/page-builder/home-page/preview')
);

// TODO: Update data type
interface PageProps {
  data: any;
  preview: boolean;
  queryParams?: Params;
  token: string;
}

/**
 * GetStaticProps interface definitions passed as generics
 * TODO: Update data type
 */
interface IParams {
  [key: string]: any;
}

interface IPreviewData {
  token: string;
}

export const getStaticProps: GetStaticProps<
  IParams,
  ParsedUrlQuery,
  IPreviewData
> = async ({ preview = false, previewData }) => {
  /**
   * In preview mode
   */
  if (preview && previewData?.token) {
    const data = await previewClient.fetch(homePageQuery);

    if (!data.page || !data.footer) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        preview,
        data,
        token: previewData.token,
      },
    };
  }

  /**
   * In production mode
   */
  const data = await client.fetch(homePageQuery);
  if (!data.page || !data.footer) {
    return {
      notFound: true,
    };
  }
  return { props: { preview, data } };
};

export default function IndexPage({ preview, data, token }: PageProps) {
  if (preview) {
    return (
      <PreviewSuspense fallback="Loading...">
        <PreviewHomePageBuilder token={token} />
      </PreviewSuspense>
    );
  }

  return <HomePageBuilder data={data} />;
}
