import type { NextPage } from 'next';
import Head from 'next/head';
import { StickerList } from '../components/SickerList';
import { SFW_PAGE_CONFIG, SITE_TITLE } from '../config';
import { SiteHeader } from '../components/SiteHeader';

const Home: NextPage = () => (
  <div>
    <Head>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <SiteHeader {...SFW_PAGE_CONFIG} title={SITE_TITLE} />
    <div>
      <StickerList {...SFW_PAGE_CONFIG.packs[0]} />
    </div>
  </div>
);

export default Home;
