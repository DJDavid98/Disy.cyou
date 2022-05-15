import type { NextPage } from 'next';
import Head from 'next/head';
import { NSFW_PAGE_CONFIG } from '../config/packs';
import { SiteHeader } from '../components/SiteHeader';
import { StickerList } from '../components/SickerList';

const MatureHome: NextPage = () => (
  <div>
    <Head>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <SiteHeader {...NSFW_PAGE_CONFIG} />
    <div>
      {NSFW_PAGE_CONFIG.packs.map((pack) => (
        <StickerList key={pack.name} {...pack} />
      ))}
    </div>
  </div>
);

export default MatureHome;
