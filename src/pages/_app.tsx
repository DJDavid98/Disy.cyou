import { DefaultSeo } from 'next-seo';
import { AppComponent } from 'next/dist/shared/lib/router/router';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import '../styles/globals.css';
import { SITE_TITLE } from '../config';
import { assembleSeoUrl } from '../util/common';

const App: AppComponent = ({ Component, pageProps }) => {
  const { asPath } = useRouter();
  const canonicalUrl = useMemo(() => assembleSeoUrl(asPath), [asPath]);

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#6688BB" />
        <meta name="wot-verification" content="dbc545e7120b5f44d66b" />

        <link rel="shortcut icon" href="/favicon.ico" />
        <title>{SITE_TITLE}</title>
      </Head>
      <DefaultSeo
        title={SITE_TITLE}
        description="Artwork by ~Dream_Weaver_Pony"
        openGraph={{
          type: 'website',
          locale: 'en-US',
          site_name: SITE_TITLE,
          url: canonicalUrl,
          images: [
            {
              alt: SITE_TITLE,
              url: assembleSeoUrl('/social.jpg'),
              width: 650,
              height: 600,
            },
          ],
        }}
        canonical={canonicalUrl}
        twitter={{
          cardType: 'summary',
          handle: '@DJDavid98',
          site: '@DJDavid98',
        }}
      />
      <Component {...pageProps} />
    </>
  );
};

export default App;
