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
}

const DREAM_WEAVER_SIZES = { width: 260, height: 260 };

export const SFW_PACK: StickerListProps = {
  name: 'DoubleColon',
  title: 'Double Colon - OC of DJDavid98',
  stickers: [
    { ...DREAM_WEAVER_SIZES, publicFileName: 'serious', emoji: Emoji.SLIGHTLY_SAD },
    { ...DREAM_WEAVER_SIZES, publicFileName: 'yay', emoji: Emoji.CELEBRATION },
    { ...DREAM_WEAVER_SIZES, publicFileName: 'ohno', emoji: Emoji.PERSEVERING },
    { ...DREAM_WEAVER_SIZES, publicFileName: 'awww', emoji: Emoji.SMILING_FACE_WITH_OPEN_HANDS },
    { ...DREAM_WEAVER_SIZES, publicFileName: 'wink', emoji: Emoji.WINK },
    { ...DREAM_WEAVER_SIZES, publicFileName: 'thinking', emoji: Emoji.THINKING },
    { ...DREAM_WEAVER_SIZES, publicFileName: 'cover', emoji: Emoji.FLUSHED },
    { ...DREAM_WEAVER_SIZES, publicFileName: 'angry', emoji: Emoji.ANGRY_FACE },
    { ...DREAM_WEAVER_SIZES, publicFileName: 'hug', emoji: Emoji.HUG },
    { ...DREAM_WEAVER_SIZES, publicFileName: 'happy', emoji: Emoji.HAPPY },
    { ...DREAM_WEAVER_SIZES, publicFileName: 'concern', emoji: Emoji.WORRIED },
    { ...DREAM_WEAVER_SIZES, publicFileName: 'bow', emoji: Emoji.BOWING },
    { ...DREAM_WEAVER_SIZES, publicFileName: 'smile', emoji: Emoji.FOX },
    { ...DREAM_WEAVER_SIZES, publicFileName: 'blep', emoji: Emoji.TONGUE_OUT },
    { ...DREAM_WEAVER_SIZES, publicFileName: 'puppy', emoji: Emoji.PLEADING },
    { ...DREAM_WEAVER_SIZES, publicFileName: 'yawn', emoji: Emoji.YAWN },
  ],
};
