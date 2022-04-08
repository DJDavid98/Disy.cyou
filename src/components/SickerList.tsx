import { VFC } from 'react';
import styles from '../styles/StickerList.module.css';
import { StickerListItem, StickerListItemProps } from './StickerListItem';

export interface StickerListProps {
  name: string;
  title: string;
  stickers: StickerListItemProps[];
}

export const StickerList: VFC<StickerListProps> = ({ name, title, stickers }) => {
  return (
    <div className={styles['sticker-list']}>
      <h2>
        <a href={`https://t.me/addstickers/${name}`} target="_blank" rel="noopener noreferrer">
          {title}
        </a>
      </h2>
      <ul>
        {stickers.map((sticker, i) => (
          <li key={i}>
            <StickerListItem {...sticker} />
          </li>
        ))}
      </ul>
    </div>
  );
};
