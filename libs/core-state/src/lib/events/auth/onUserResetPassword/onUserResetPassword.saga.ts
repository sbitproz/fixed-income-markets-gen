
import { call, put, takeLatest } from 'redux-saga/effects'
import { PayloadAction } from '@reduxjs/toolkit';
import { onUserResetPasswordError, onUserResetPasswordStart, onUserResetPasswordSuccess, OnUserResetPasswordStart } from './onUserResetPassword.actions';

function* onUserResetPasswordSaga(action: PayloadAction<OnUserResetPasswordStart>): Generator<any,any> {
  try {
      // put your business logic here
      // yield call(someAPI, action.payload.someParam);
      // yield put(onUserResetPasswordSuccess(onUserResetPassword));
  } catch (e: any) {
      yield put(onUserResetPasswordError(e.message));
  }
}

function* onUserResetPasswordEventsSaga() {
  yield takeLatest(onUserResetPasswordStart, onUserResetPasswordSaga);
}

export default onUserResetPasswordEventsSaga;
