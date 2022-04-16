import { useCallback, useMemo, VFC } from 'react';
import Image from 'next/image';
import copyToClipboard from 'copy-to-clipboard';
import styles from '../styles/StickerListItem.module.css';

export interface StickerListItemProps {
  emoji?: string;
  height: number;
  publicFileName: string;
  publicFileVersion?: number;
  width: number;
}

export const StickerListItem: VFC<StickerListItemProps> = ({ emoji, publicFileName, publicFileVersion, ...imageData }) => {
  const src = useMemo(
    () => `/s/${publicFileName}.png${publicFileVersion ? `?v=${publicFileVersion}` : ''}`,
    [publicFileName, publicFileVersion],
  );
  const handleCopy = useCallback(() => {
    copyToClipboard(`${process.env.NEXT_PUBLIC_FRONTEND_HOST || ''}${src}`);
  }, [src]);
  return (
    <div className={styles.wrapper}>
      <Image src={src} width={imageData.width} height={imageData.height} alt={emoji} onClick={handleCopy} quality={50} />
      {emoji && <span className={styles.emoji}>{emoji}</span>}
    </div>
  );
};
