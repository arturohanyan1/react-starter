import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import duration from 'dayjs/plugin/duration';
import { PALLETTES } from 'src/utils/palette';

dayjs.extend(duration);
dayjs.extend(advancedFormat);

const isValidEmail = (email: string): boolean => {
  //  eslint-disable-next-line
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
};

const detectDevice = (): 'desktop' | 'mobile' | 'tablet' => {
  const ua = navigator.userAgent;

  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return 'tablet';
  } else if (
    /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)
  ) {
    return 'mobile';
  }

  return 'desktop';
};

const isTokenExpired = (): boolean => {
  const now = dayjs();
  const storedDate = localStorage.getItem('storedDate');
  if (storedDate) {
    return now.valueOf() > Number(storedDate);
  }
  return true;
};

const disableInputNumberSymbols = (e: any, type: string, disableNumberSymbols: boolean | undefined): void => {
  if (type === 'number' && ['e', 'E', '+', '-', '.'].includes(e.key) && disableNumberSymbols) {
    e.preventDefault();
  }
};

const getFromQueryParams = (search: string): { [key: string]: string } => {
  const newStr = search.slice(1);
  const arr = newStr.split('&');
  return arr.reduce((acc, cur) => {
    const d = cur.split('=');
    return {
      ...acc,
      [d[0]]: d[1],
    };
  }, {});
};

const makeQueryPath = (obj: { [key: string]: string }): string => {
  const res: string = Object.keys(obj).reduce((acc, cur) => `${acc}${cur}=${obj[cur]}&`, '?');
  return res.endsWith('&') ? res.substring(0, res.length - 1) : res;
};

const envBoolean = (envVar: any): boolean => {
  const arg: any = Boolean(envVar);
  return /true/.test(arg);
};

const getBaseUrl = (
  url: string | { baseURL: string; path: string },
  params: any,
  joinQueryArrayValues: any
): string => {
  let path = '';

  if (typeof url === 'string') {
    path = url;
  } else {
    path = url.baseURL + url.path;
  }

  path = params ? path + '?' + joinQueryArrayValues : path;

  return path;
};

const htmlParse = (c: string, url: string): any => {
  let content = c.replace(/<img\s+[^>]*src=["']([^"']+)["'][^>]*>/gi, `<img src="${url}$1" />`);
  content = content.replace(/<svg\s+[^>]*src=["']([^"']+)["'][^>]*>/gi, `<svg src="${url}$1" />`);
  return content;
};

const isIOS = (): boolean => {
  return (
    ['iPad Simulator', 'iPhone Simulator', 'iPod Simulator', 'iPad', 'iPhone', 'iPod'].includes(navigator.platform) ||
    (navigator.userAgent.includes('Mac') && 'ontouchend' in document)
  );
};
const isColorDark = (rgbString: string): boolean => {
  const rgbValues = rgbString.match(/\d+/g);

  if (!rgbValues || rgbValues.length !== 3) {
    return false;
  }

  const normalizedR = parseInt(rgbValues[0]) / 255;
  const normalizedG = parseInt(rgbValues[1]) / 255;
  const normalizedB = parseInt(rgbValues[2]) / 255;

  const luminance = 0.2126 * normalizedR + 0.7152 * normalizedG + 0.0722 * normalizedB;

  return luminance <= 0.5;
};

const calculateTimeLeft = (targetDate: Date | string | null): any => {
  const now = dayjs();
  const then = dayjs(targetDate);
  const diffInMilliseconds = then.diff(now);
  const countdown = dayjs.duration(diffInMilliseconds);

  return {
    days: Math.floor(countdown.asDays()) >= 0 ? String(Math.floor(countdown.asDays())).padStart(2, '0') : '00',
    hours: countdown.hours() >= 0 ? String(countdown.hours()).padStart(2, '0') : '00',
    minutes: countdown.minutes() >= 0 ? String(countdown.minutes()).padStart(2, '0') : '00',
    seconds: countdown.seconds() >= 0 ? String(countdown.seconds()).padStart(2, '0') : '00',
  };
};

const isValidDate = (dateString: any): boolean => {
  const date = new Date(dateString);
  return !isNaN(date.getTime());
};

const isNumber = (input: any): boolean => {
  if (typeof input === 'number') {
    return !isNaN(input) && isFinite(input);
  }
  if (typeof input === 'string' && input.trim() !== '') {
    return !isNaN(parseFloat(input)) && isFinite(parseFloat(input));
  }
  return false;
};

const setPaletteHandler = (selectedTheme: string): void => {
  let palleteStyle = '';
  const palette = PALLETTES[selectedTheme];

  if (palette) {
    Object.keys(palette).forEach((key: string) => {
      return (palleteStyle += `${key}:${palette[key]};`);
    });

    if (palleteStyle) {
      document.getElementsByTagName('HTML')[0].setAttribute('style', palleteStyle);
    }
  }
};

const scrollToTop = (behavior: ScrollBehavior = 'auto'): void => {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: behavior,
  });
};

const trimObjStringVals = (obj: any): any => {
  return Object.keys(obj).reduce((acc: any, cur: string) => {
    if (typeof obj[cur] === 'string') {
      acc[cur] = obj[cur].trim();
    } else {
      acc[cur] = obj[cur];
    }
    return acc;
  }, {});
};

const getPaginationPageNumbers = (
  total: number,
  limit: number,
  currentPage: number,
  pageCountToShow: number
): number[] => {
  const halfPageCount = Math.floor(pageCountToShow / 2);
  const totalPages = Math.ceil(total / limit);

  let startPage = Math.max(1, currentPage - halfPageCount);
  const endPage = Math.min(totalPages, startPage + pageCountToShow - 1);

  if (endPage - startPage + 1 < pageCountToShow) {
    startPage = Math.max(1, endPage - pageCountToShow + 1);
  }

  return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
};

const replaceAll = (str: string, oldClass: string, newClass: string): string => {
  return str.replace(new RegExp(oldClass, 'g'), newClass);
};

const setBodyOverflow = (type: 'set' | 'unset'): void => {
  const _fixed = 'fixed-body ';

  document.body.className =
    type === 'unset'
      ? _fixed + replaceAll(document.body.className, _fixed, '')
      : document.body.className.replace(_fixed, '');
};

const copyText = async (clipboardText: string): Promise<boolean> => {
  if (!clipboardText) {
    return false;
  }

  const isiOS = /Mac|iPhone|iPod|iPad/i.test(navigator.platform);

  if (isiOS) {
    // Use a textarea element for iOS devices
    const textarea = document.createElement('textarea');
    textarea.value = clipboardText;
    textarea.style.position = 'fixed'; // Avoid scrolling to bottom
    textarea.style.left = '-9999px'; // Move textarea out of view
    document.body.appendChild(textarea);
    textarea.select();

    try {
      const successful = document.execCommand('copy');
      document.body.removeChild(textarea);
      return successful;
    } catch (err) {
      console.error('Failed to copy text to clipboard.', err);
      document.body.removeChild(textarea);
      return false;
    }
  } else {
    // Use the Clipboard API for non-iOS devices
    try {
      await navigator.clipboard.writeText(clipboardText);
      return true;
    } catch (err) {
      console.error('Failed to copy text to clipboard.', err);
      return false;
    }
  }
};

export {
  calculateTimeLeft,
  detectDevice,
  disableInputNumberSymbols,
  envBoolean,
  getBaseUrl,
  getFromQueryParams,
  htmlParse,
  isColorDark,
  isIOS,
  isTokenExpired,
  isValidDate,
  isValidEmail,
  makeQueryPath,
  isNumber,
  setPaletteHandler,
  scrollToTop,
  trimObjStringVals,
  getPaginationPageNumbers,
  setBodyOverflow,
  copyText,
};
