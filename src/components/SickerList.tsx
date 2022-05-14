import { VFC } from 'react';
import styles from '../styles/StickerList.module.css';
import { StickerListItem, StickerListItemProps } from './StickerListItem';

export interface StickerListProps {
  /**
   * Short name of the sticker pack used in the share URL
   *
   * Also used for applying CSS styles
   */
  name: string;
  stickers: StickerListItemProps[];
}

export const StickerList: VFC<StickerListProps> = ({ name, stickers }) => (
  <div className={styles['sticker-list']} data-name={name}>
    <div className={styles.background}>
      <ul>
        {stickers.map((sticker, i) => (
          <li key={i}>
            <StickerListItem {...sticker} />
          </li>
        ))}
      </ul>
    </div>
  </div>
);
