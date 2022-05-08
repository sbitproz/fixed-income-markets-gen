
import { call, put, takeLatest } from 'redux-saga/effects'
import { PayloadAction } from '@reduxjs/toolkit';
import { onFetchUserByEmailError, onFetchUserByEmailStart, onFetchUserByEmailSuccess, OnFetchUserByEmailStart } from './onFetchUserByEmail.actions';

function* onFetchUserByEmailSaga(action: PayloadAction<OnFetchUserByEmailStart>): Generator<any,any> {
  try {
      // put your business logic here
      // yield call(someAPI, action.payload.someParam);
      // yield put(onFetchUserByEmailSuccess(onFetchUserByEmail));
  } catch (e: any) {
      yield put(onFetchUserByEmailError(e.message));
  }
}

function* onFetchUserByEmailEventsSaga() {
  yield takeLatest(onFetchUserByEmailStart, onFetchUserByEmailSaga);
}

export default onFetchUserByEmailEventsSaga;
