import { EnumRoutePaths } from 'src/configs/routes';
import { INavItemType } from 'src/types/common-types/common';

const SUCCESS_STATUSES = [200, 201, 204];

const APP_API_VERSION = '/api_v2';
const APP_API = '/api';
const LOCALES = [
  { label: 'en', value: 'en', iconSrc: 'en' },
  { label: 'pt', value: 'pt', iconSrc: 'pt' },
  { label: 'ru', value: 'ru', iconSrc: 'ru' },
];

const BASE_URL = window.location.origin + '/';

const APP_THEMES: string[] = ['dark', 'light', 'green', 'purple'];

const TYPOGRAPHY_VARIATIONS: any = {
  section_title: 'h2',
  subtitle1: 'h6',
  subtitle2: 'h6',
  subtitle3: 'h6',
  inherit: 'p',
  body1: 'p',
  body2: 'p',
  body3: 'p',
  body4: 'p',
  body5: 'p',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  label: 'label',
};

const NAVIGATION_ITEMS: INavItemType[] = [
  // { path: EnumRoutePaths.VELOX, label: 'velox', needLogin: false, hideOnLogout: false },
  { path: EnumRoutePaths.BASE, label: 'home', needLogin: false, hideOnLogout: false },
];

const DESKTOP_HEADER_HEIGTH = 82;
const MOBILE_HEADER_HEIGTH = 60;

export {
  SUCCESS_STATUSES,
  APP_API_VERSION,
  APP_API,
  LOCALES,
  APP_THEMES,
  BASE_URL,
  TYPOGRAPHY_VARIATIONS,
  NAVIGATION_ITEMS,
  DESKTOP_HEADER_HEIGTH,
  MOBILE_HEADER_HEIGTH,
};
