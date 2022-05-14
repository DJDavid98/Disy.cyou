import { Artist, PackInfoProps } from '../components/SiteHeader';
import { StickerListProps } from '../components/SickerList';

enum Emoji {
  ANGRY_FACE = '😡',
  BOWING = '🙇',
  FLUSHED = '😳',
  FOX = '🦊',
  HAPPY = '😃',
  HUG = '🤗',
  PERSEVERING = '😣',
  PLEADING = '🥺',
  SLIGHTLY_SAD = '🙁',
  SMILING_FACE_WITH_OPEN_HANDS = '🤗',
  THINKING = '🤔',
  TONGUE_OUT = '😝',
  WINK = '😉',
  WORRIED = '😟',
  YAWN = '🥱',
  CELEBRATION = '🎉',
  EGGPLANT = '🍆',
  PEACH = '🍑',
  SWEATING_FACE = '😰',
  GLASS_OF_MILK = '🥛',
  PIN = '📌',
  TONGUE_OUT_WINK = '😜',
}

const DreamWeaverPony: Artist = {
  name: '~Dream_Weaver_Pony',
  url: 'https://www.furaffinity.net/user/dreamweaverpony',
};

const KPVT: Artist = {
  name: '@KPVT_ARTS',
  url: 'https://twitter.com/KPVT_ARTS',
};

const SFW_STICKER_PACK: StickerListProps = {
  name: 'DoubleColon',
  stickers: [
    { publicFileName: 'serious', emoji: Emoji.SLIGHTLY_SAD },
    { publicFileName: 'yay', emoji: Emoji.CELEBRATION },
    { publicFileName: 'ohno', emoji: Emoji.PERSEVERING },
    { publicFileName: 'awww', emoji: Emoji.SMILING_FACE_WITH_OPEN_HANDS },
    { publicFileName: 'wink', emoji: Emoji.WINK },
    { publicFileName: 'thinking', emoji: Emoji.THINKING },
    { publicFileName: 'cover', emoji: Emoji.FLUSHED },
    { publicFileName: 'angry', emoji: Emoji.ANGRY_FACE },
    { publicFileName: 'hug', emoji: Emoji.HUG },
    { publicFileName: 'happy', emoji: Emoji.HAPPY },
    { publicFileName: 'concern', emoji: Emoji.WORRIED },
    { publicFileName: 'bow', emoji: Emoji.BOWING },
    { publicFileName: 'smile', emoji: Emoji.FOX },
    { publicFileName: 'blep', emoji: Emoji.TONGUE_OUT },
    { publicFileName: 'puppy', emoji: Emoji.PLEADING },
    { publicFileName: 'yawn', emoji: Emoji.YAWN },
  ],
};

const NSFW_STICKER_PACK: StickerListProps = {
  name: 'DoubleColonNSFW',
  stickers: [
    { publicFileName: 'ass', emoji: Emoji.PEACH },
    { publicFileName: 'dildo', emoji: Emoji.EGGPLANT },
    { publicFileName: 'eating-out', emoji: Emoji.SWEATING_FACE },
    { publicFileName: 'milk', emoji: Emoji.GLASS_OF_MILK },
    { publicFileName: 'pinned', emoji: Emoji.PIN },
    { publicFileName: 'snack', emoji: Emoji.TONGUE_OUT_WINK },
  ],
};

export const SFW_PAGE_CONFIG: PackInfoProps = {
  artists: [DreamWeaverPony],
  refSheetUrl: 'https://fox.djdavid98.art',
  nsfw: false,
  packs: [SFW_STICKER_PACK],
};

export const NSFW_PAGE_CONFIG: PackInfoProps = {
  artists: [DreamWeaverPony, KPVT],
  refSheetUrl: 'https://nsfox.djdavid98.art',
  nsfw: true,
  packs: [SFW_STICKER_PACK, NSFW_STICKER_PACK],
};
