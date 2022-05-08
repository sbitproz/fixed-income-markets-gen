
import { call, put, takeLatest } from 'redux-saga/effects'
import { PayloadAction } from '@reduxjs/toolkit';
import { onUserLogoutError, onUserLogoutStart, onUserLogoutSuccess, OnUserLogoutStart } from './onUserLogout.actions';

function* onUserLogoutSaga(action: PayloadAction<OnUserLogoutStart>): Generator<any,any> {
  try {
      // put your business logic here
      // yield call(someAPI, action.payload.someParam);
      // yield put(onUserLogoutSuccess(onUserLogout));
  } catch (e: any) {
      yield put(onUserLogoutError(e.message));
  }
}

function* onUserLogoutEventsSaga() {
  yield takeLatest(onUserLogoutStart, onUserLogoutSaga);
}

export default onUserLogoutEventsSaga;
