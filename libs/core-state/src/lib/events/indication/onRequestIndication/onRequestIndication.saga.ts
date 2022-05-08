
import { call, put, takeLatest } from 'redux-saga/effects'
import { PayloadAction } from '@reduxjs/toolkit';
import { onRequestIndicationError, onRequestIndicationStart, onRequestIndicationSuccess, OnRequestIndicationStart } from './onRequestIndication.actions';

function* onRequestIndicationSaga(action: PayloadAction<OnRequestIndicationStart>): Generator<any,any> {
  try {
      // put your business logic here
      // yield call(someAPI, action.payload.someParam);
      // yield put(onRequestIndicationSuccess(onRequestIndication));
  } catch (e: any) {
      yield put(onRequestIndicationError(e.message));
  }
}

function* onRequestIndicationEventsSaga() {
  yield takeLatest(onRequestIndicationStart, onRequestIndicationSaga);
}

export default onRequestIndicationEventsSaga;
