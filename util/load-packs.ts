import TelegramBot, { StickerSet } from 'node-telegram-bot-api';
import type { StickerListProps } from '../pages/SickerList';

export const loadPacks = (names: (string | undefined)[]): Promise<StickerListProps[]> => {
  const { BOT_TOKEN: botToken } = process.env;
  if (!botToken) throw new Error('BOT_TOKEN environment variable must be set');

  const bot = new TelegramBot(botToken, { polling: false });
  const packNames = names.filter(Boolean) as string[];

  return Promise.all<StickerListProps>(
    packNames.map(async (packName): Promise<StickerListProps> => {
      console.debug(`Loading sticker set ${packName}`);
      try {
        const packData = await (bot as unknown as { getStickerSet(packName: string): Promise<StickerSet> }).getStickerSet(packName);
        const stickers: StickerListProps['stickers'] = await Promise.all(
          packData.stickers.map(async (stickerData) => ({
            emoji: stickerData.emoji,
            height: stickerData.height,
            width: stickerData.width,
            imageUrl: await bot.getFileLink(stickerData.file_id),
          })),
        );
        return {
          name: packData.name,
          title: packData.title,
          stickers,
        };
      } catch (e) {
        console.error(`Failed to load sticker set ${packName}`);
        console.error(e);
        return {
          name: packName,
          title: packName,
          stickers: [],
        };
      }
    }),
  );
};
