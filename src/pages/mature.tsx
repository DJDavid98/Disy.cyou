import type { NextPage } from 'next';
import Head from 'next/head';
import { NSFW_PAGE_CONFIG, SITE_TITLE } from '../config';
import { SiteHeader } from '../components/SiteHeader';
import { StickerList } from '../components/SickerList';

const MatureHome: NextPage = () => (
  <div>
    <Head>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <SiteHeader {...NSFW_PAGE_CONFIG} title={`${SITE_TITLE} (NSFW)`} />
    <div>
      {NSFW_PAGE_CONFIG.packs.map((pack) => (
        <StickerList key={pack.name} {...pack} />
      ))}
    </div>
  </div>
);

export default MatureHome;
