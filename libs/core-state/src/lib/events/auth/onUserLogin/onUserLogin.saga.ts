
import { call, put, takeLatest } from 'redux-saga/effects'
import { PayloadAction } from '@reduxjs/toolkit';
import { onUserLoginError, onUserLoginStart, onUserLoginSuccess, OnUserLoginStart } from './onUserLogin.actions';

function* onUserLoginSaga(action: PayloadAction<OnUserLoginStart>): Generator<any,any> {
  try {
      // put your business logic here
      // yield call(someAPI, action.payload.someParam);
      // yield put(onUserLoginSuccess(onUserLogin));
  } catch (e: any) {
      yield put(onUserLoginError(e.message));
  }
}

function* onUserLoginEventsSaga() {
  yield takeLatest(onUserLoginStart, onUserLoginSaga);
}

export default onUserLoginEventsSaga;
