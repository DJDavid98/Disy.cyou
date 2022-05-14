import { VFC } from 'react';
import styles from '../styles/SiteHeader.module.css';
import { SITE_TITLE } from '../config';
import { StatSeparator } from './StatSeparator';
import { StickerListProps } from './SickerList';
import { TelegramPackLink } from './TelegramPackLink';
import { CommaSeparatedComponents } from './CommaSeparatedComponents';

export interface Artist {
  name: string;
  url: string;
}

export interface PackInfoProps {
  refSheetUrl: string;
  packs: StickerListProps[];
  artists: Artist[];
  nsfw: boolean;
}

export const SiteHeader: VFC<PackInfoProps> = ({ refSheetUrl, packs, artists, nsfw }) => (
  <>
    <header className={styles.header}>
      <h1>{SITE_TITLE + (nsfw ? '' : ' (NSFW)')}</h1>
      <p>
        Fursona of DJDavid98
        <StatSeparator />
        <a href={refSheetUrl} target="_blank" rel="noopener noreferrer">
          Reference Sheet
        </a>
        <StatSeparator />
        {packs.length > 0 ? (
          <>
            {`Telegram pack${packs.length !== 1 ? 's' : ''}: `}
            <CommaSeparatedComponents>
              {packs.map((pack) => (
                <TelegramPackLink key={pack.name} packName={pack.name}>
                  {pack.name}
                </TelegramPackLink>
              ))}
            </CommaSeparatedComponents>
          </>
        ) : (
          <TelegramPackLink packName={packs[0].name}>Telegram Pack</TelegramPackLink>
        )}
        <br />
        Artwork made by{' '}
        <CommaSeparatedComponents>
          {artists.map((artist) => (
            <a key={artist.name} href={artist.url} target="_blank" rel="noopener noreferrer">
              {artist.name}
            </a>
          ))}
        </CommaSeparatedComponents>
      </p>
    </header>
  </>
);
