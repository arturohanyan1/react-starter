import { createAction } from 'deox';
import { APP_SET_THEME_REQ } from './types';

export const setTheme = {
  req: createAction(APP_SET_THEME_REQ, (res) => (params: string) => res(params)),
};
