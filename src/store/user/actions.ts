import { createAction } from 'deox';
import {
  ISignInReq,
  LOGOUT,
  USER_SIGN_IN_FAIL,
  USER_SIGN_IN_LOAD,
  USER_SIGN_IN_REQ,
  USER_SIGN_IN_SUCCESS,
} from './types';

export const setLogout = createAction(LOGOUT, (res) => (params?) => res(params));

export const signIn = {
  req: createAction(USER_SIGN_IN_REQ, (res) => (params: ISignInReq) => res(params)),
  success: createAction(USER_SIGN_IN_SUCCESS, (res) => (params) => res(params)),
  fail: createAction(USER_SIGN_IN_FAIL),
  load: createAction(USER_SIGN_IN_LOAD, (res) => (params) => res(params)),
};
