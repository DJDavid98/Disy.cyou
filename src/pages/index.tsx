import type { NextPage } from 'next';
import Head from 'next/head';
import { StickerList, StickerListProps } from '../components/SickerList';
import { REF_SHEET_URL, SFW_PACK, SITE_TITLE } from '../config';
import styles from '../styles/Home.module.css';
import { StatSeparator } from '../components/StatSeparator';

const Home: NextPage = () => {
  const packs: StickerListProps[] = [SFW_PACK];
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <h1>{SITE_TITLE}</h1>
        <p>
          Fursona of DJDavid98
          <StatSeparator />
          <a href={REF_SHEET_URL} target="_blank" rel="noopener noreferrer">
            Reference Sheet
          </a>
          <StatSeparator />
          <a href={`https://t.me/addstickers/${SFW_PACK.name}`} target="_blank" rel="noopener noreferrer">
            Telegram Pack
          </a>
          <br />
          Artwork made by{' '}
          <a href="https://www.furaffinity.net/user/dreamweaverpony" target="_blank" rel="noopener noreferrer">
            ~Dream_Weaver_Pony
          </a>
        </p>
      </header>
      {packs.length > 0 ? packs.map((pack, i) => <StickerList key={i} {...pack} />) : <p>No stickers to show.</p>}
    </div>
  );
};

export default Home;
