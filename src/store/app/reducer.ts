import { createReducer } from 'deox';
import produce from 'immer';
import { APP_THEMES } from 'src/utils/constants';
import { setTheme } from './actions';
import { appState } from './types';

export const appInitialState: appState = {
  selectedTheme: localStorage.getItem('selectedTheme')
    ? (localStorage.getItem('selectedTheme') as string)
    : APP_THEMES[0],
};

export const appReducer = createReducer(appInitialState, (handle) => [
  handle(setTheme.req, (state, { payload }: any) =>
    produce(state, (draft) => {
      draft.selectedTheme = payload;
    })
  ),
]);
