import { fork } from 'redux-saga/effects';
import { watchUser } from './user/saga';

export default function* rootSaga(): any {
  yield fork(watchUser);
}
