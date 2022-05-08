
import { call, put, takeLatest } from 'redux-saga/effects'
import { PayloadAction } from '@reduxjs/toolkit';
import { onUserRegisterError, onUserRegisterStart, onUserRegisterSuccess, OnUserRegisterStart } from './onUserRegister.actions';

function* onUserRegisterSaga(action: PayloadAction<OnUserRegisterStart>): Generator<any,any> {
  try {
      // put your business logic here
      // yield call(someAPI, action.payload.someParam);
      // yield put(onUserRegisterSuccess(onUserRegister));
  } catch (e: any) {
      yield put(onUserRegisterError(e.message));
  }
}

function* onUserRegisterEventsSaga() {
  yield takeLatest(onUserRegisterStart, onUserRegisterSaga);
}

export default onUserRegisterEventsSaga;
