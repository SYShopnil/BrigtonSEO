import '@styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

/**
 * TODO: Remove no index before production
 */

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>Brighton SEO Develop</title>
        <meta name="robots" content="noindex,nofollow" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
