import { ISignInPayload } from 'src/types/req-dto/authorization';
import { ISagaReqStructure } from '../../types/store-types';

export type userState = {
  user: any;
  authLoading: boolean;
};

export interface ISignInReq extends ISagaReqStructure {
  data: ISignInPayload;
  dispatch: any;
}

export const USER_SIGN_IN_REQ = 'user/USER_SIGN_IN_REQ';
export const USER_SIGN_IN_SUCCESS = 'user/USER_SIGN_IN_SUCCESS';
export const USER_SIGN_IN_FAIL = 'user/USER_SIGN_IN_FAIL';
export const USER_SIGN_IN_LOAD = 'user/USER_SIGN_IN_LOAD';

export const LOGOUT = 'user/LOGOUT';
