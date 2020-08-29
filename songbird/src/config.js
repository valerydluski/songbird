export const LINKS = [
  { name: '1-ый уровень' },
  { name: '2-ой уровень' },
  { name: '3-ий уровень' },
  { name: '4-ый уровень' },
  { name: '5-ый уровень' },
  { name: '6-ой уровень' },
];

export const DEFAULT_TEXT = 'Послушайте песню. Выберите исполнителя из списка';

export const LINK_FOR_AUDIO = 'https://raw.githubusercontent.com/valerydluski/my_songs/master/mp3/';

export const LINK_FOR_IMG = 'https://raw.githubusercontent.com/valerydluski/my_songs/master/img/';

export const DEFAULT_IMAGE = `${LINK_FOR_IMG}default.jpg`;

export const SCREEN_SIZE = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 864,
  laptop: 1024,
  laptopS: 1280,
  laptopM: 1366,
  laptopL: 1440,
  desktop: 2560,
};

export const DEVICE = {
  mobileS: `(max-width: ${SCREEN_SIZE.mobileS}px)`,
  mobileM: `(max-width: ${SCREEN_SIZE.mobileM}px)`,
  mobileL: `(max-width: ${SCREEN_SIZE.mobileL}px)`,
  tablet: `(max-width: ${SCREEN_SIZE.tablet}px)`,
  laptop: `(max-width: ${SCREEN_SIZE.laptop}px)`,
  laptopS: `(max-width: ${SCREEN_SIZE.laptopS}px)`,
  laptopM: `(max-width: ${SCREEN_SIZE.laptopM}px)`,
  laptopL: `(max-width: ${SCREEN_SIZE.laptopL}px)`,
  desktop: `(max-width: ${SCREEN_SIZE.desktop}px)`,
};
