/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable redux-saga/no-unhandled-errors */
import dayjs from 'dayjs';
import { call, put, takeLatest } from 'redux-saga/effects';
import { signInRequest } from 'src/services/authorizationApi';
import { IReqPayloadStructure } from '../../types/store-types';
import { signIn } from './actions';
import { LOGOUT, USER_SIGN_IN_REQ } from './types';

export function* signInSaga({ payload }: any): any {
  const { onSuccessCb, onFailCb, data } = payload;

  try {
    yield put(signIn.load(true));
    const reqData = { ...data, skinId: process.env.REACT_APP_SKIN_ID };
    const resp: IReqPayloadStructure | any = yield call(signInRequest, reqData);

    if (resp.success) {
      const now = dayjs();
      const storedDate = now.add(resp.result.exp, 'seconds').valueOf();
      const user = {
        ...resp.result,
        personalInfo: { ...resp.result.personalInfo, emailVerified: Boolean(resp.result.personalInfo.emailVerified) },
      };
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('wallets', JSON.stringify(resp.result?.wallets));
      localStorage.setItem('storedDate', String(storedDate));

      yield put(signIn.success({ ...user, storedDate }));

      if (onSuccessCb) {
        onSuccessCb();
      }
    } else {
      if (onFailCb) {
        onFailCb(resp);
      }
    }
  } catch (error: any) {
    if (onFailCb) {
      onFailCb(error);
    }
  } finally {
    yield put(signIn.load(false));
  }
}

export function* signOutSaga(d?: any): any {
  yield localStorage.removeItem('storedDate');
  yield localStorage.removeItem('user');
  if (d?.payload && d?.payload.onSuccessCb) {
    d.payload.onSuccessCb();
  }
}

export function* watchUser(): any {
  yield takeLatest(USER_SIGN_IN_REQ, signInSaga);
  yield takeLatest(LOGOUT, signOutSaga);
}
