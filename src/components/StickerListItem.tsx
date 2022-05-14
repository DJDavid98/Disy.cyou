import { MouseEventHandler, useCallback, useMemo, VFC } from 'react';
import Image from 'next/image';
import copyToClipboard from 'copy-to-clipboard';
import styles from '../styles/StickerListItem.module.css';

const IMAGE_SIZES = { width: 260, height: 260 };

export interface StickerListItemProps {
  emoji: string;
  publicFileName: string;
  publicFileVersion?: number;
}

export const StickerListItem: VFC<StickerListItemProps> = ({ emoji, publicFileName, publicFileVersion }) => {
  const src = useMemo(
    () => `/s/${publicFileName}.png${publicFileVersion ? `?v=${publicFileVersion}` : ''}`,
    [publicFileName, publicFileVersion],
  );
  const handleCopy: MouseEventHandler = useCallback(
    (e) => {
      e.preventDefault();
      const whatToCopy = e.ctrlKey ? emoji : `${process.env.NEXT_PUBLIC_FRONTEND_HOST || ''}${src}`;
      copyToClipboard(whatToCopy);
    },
    [emoji, src],
  );
  return (
    <div className={styles.wrapper}>
      <Image src={src} width={IMAGE_SIZES.width} height={IMAGE_SIZES.height} alt={emoji} onClick={handleCopy} quality={50} />
      {emoji && <span className={styles.emoji}>{emoji}</span>}
    </div>
  );
};
