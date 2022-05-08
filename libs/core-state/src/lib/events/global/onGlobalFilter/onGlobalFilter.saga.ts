
import { call, put, takeLatest } from 'redux-saga/effects'
import { PayloadAction } from '@reduxjs/toolkit';
import { onGlobalFilterError, onGlobalFilterStart, onGlobalFilterSuccess, OnGlobalFilterStart } from './onGlobalFilter.actions';

function* onGlobalFilterSaga(action: PayloadAction<OnGlobalFilterStart>): Generator<any,any> {
  try {
      // put your business logic here
      // yield call(someAPI, action.payload.someParam);
      // yield put(onGlobalFilterSuccess(onGlobalFilter));
  } catch (e: any) {
      yield put(onGlobalFilterError(e.message));
  }
}

function* onGlobalFilterEventsSaga() {
  yield takeLatest(onGlobalFilterStart, onGlobalFilterSaga);
}

export default onGlobalFilterEventsSaga;
