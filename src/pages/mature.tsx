import type { NextPage } from 'next';
import Head from 'next/head';
import { NSFW_PAGE_CONFIG, SFW_PAGE_CONFIG } from '../config';
import { NextSeo } from 'next-seo';
import { SiteHeader } from '../components/SiteHeader';
import { StickerList } from '../components/SickerList';

const MatureHome: NextPage = () => (
  <div>
    <Head>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <NextSeo description={`Artwork by ${SFW_PAGE_CONFIG.artists.map((a) => a.name).join(', ')}`} />
    <SiteHeader {...NSFW_PAGE_CONFIG} />
    <div>
      {NSFW_PAGE_CONFIG.packs.map((pack) => (
        <StickerList key={pack.name} {...pack} />
      ))}
    </div>
  </div>
);

export default MatureHome;
