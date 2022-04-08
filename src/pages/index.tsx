import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { StickerList, StickerListProps } from '../components/SickerList';
import { loadPacks } from '../util/load-packs';

interface HomeProps {
  packs: StickerListProps[];
}

const Home: NextPage<HomeProps> = ({ packs }) => {
  const title = 'Disy Telegram Stickers';
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>{title}</h1>
      {packs.length > 0 ? packs.map((pack, i) => <StickerList key={i} {...pack} />) : <p>No stickers to show.</p>}
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const { PACK_NAME } = process.env;

  const packs: HomeProps['packs'] = await loadPacks([PACK_NAME]);

  return {
    props: { packs },
  };
};
