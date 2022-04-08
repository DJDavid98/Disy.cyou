import { useCallback, VFC } from 'react';
import Image from 'next/image';
import copyToClipboard from 'copy-to-clipboard';
import styles from '../styles/StickerListItem.module.css';

export interface StickerListItemProps {
  emoji?: string;
  imageUrl: string;
  width: number;
  height: number;
}

export const StickerListItem: VFC<StickerListItemProps> = ({ imageUrl, width, height, emoji }) => {
  const handleCopy = useCallback(() => {
    copyToClipboard(imageUrl);
  }, [imageUrl]);
  return (
    <div className={styles.wrapper}>
      <Image src={imageUrl} width={width} height={height} alt={emoji} onClick={handleCopy} />
      <span className={styles.emoji}>{emoji}</span>
    </div>
  );
};
