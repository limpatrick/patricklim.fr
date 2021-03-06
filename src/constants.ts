// ANCHOR IDS
export const ID_ABOUT_ME = 'pl-about-me';
export const ID_CONTACT = 'pl-contact';
export const ID_EDUCATION = 'pl-education';
export const ID_EXPERIENCE = 'pl-experience';
export const ID_TECHNOLOGIES = 'pl-technologies';
export const ID_TOP = 'pl-id-top';

export type Anchor =
  | typeof ID_ABOUT_ME
  | typeof ID_CONTACT
  | typeof ID_EDUCATION
  | typeof ID_EXPERIENCE
  | typeof ID_TECHNOLOGIES
  | typeof ID_TOP;

// CSS
export const COLOR_DARK = '#6F65A2';
export const COLOR_ERROR = '#DA2E63';
export const COLOR_LIGHT = '#FD7E80';
export const COLOR_SUCCESS = COLOR_DARK;
export const FOOTER_HEIGHT = 63;
export const MIN_HEIGHT_CALC_FULL_SCREEN = `calc(100vh - ${FOOTER_HEIGHT}px)`;
export const MIN_WIDTH = 333;

// LOCAL STORAGE
export const LS_GATSBY_INTL_LANGUAGE = 'gatsby-intl-language';

// COOKIE
export const COOKIE_PREFIX = 'pl';
export const COOKIE_SEPARATOR = '-';
export const COOKIE_THEME_KEY = 'theme';
