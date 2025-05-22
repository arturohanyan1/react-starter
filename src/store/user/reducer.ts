import { createReducer } from 'deox';
import produce from 'immer';
import { isTokenExpired } from 'src/utils/helpers';
import { setLogout, signIn } from './actions';
import { userState } from './types';

const defaultUser = (): any => {
  if (localStorage.getItem('user')) {
    const _user = JSON.parse(localStorage.getItem('user') as any);
    const _isTokenExpired = isTokenExpired();
    if (_isTokenExpired) {
      return null;
    } else {
      return _user;
    }
  } else {
    return null;
  }
};
export const userInitialState: userState = {
  user: defaultUser(),
  authLoading: false,
};

export const userReducer = createReducer(userInitialState, (handle) => [
  handle(setLogout, (state, {}: any) =>
    produce(state, (draft) => {
      draft.user = null;
      localStorage.removeItem('user');
    })
  ),
  handle(signIn.load, (state, { payload }: any) =>
    produce(state, (draft) => {
      draft.authLoading = payload;
    })
  ),
  handle(signIn.success, (state, { payload }: any) =>
    produce(state, (draft) => {
      draft.user = payload;
    })
  ),
]);
