
import { call, put, takeLatest } from 'redux-saga/effects'
import { PayloadAction } from '@reduxjs/toolkit';
import { onCancelIndicationError, onCancelIndicationStart, onCancelIndicationSuccess, OnCancelIndicationStart } from './onCancelIndication.actions';

function* onCancelIndicationSaga(action: PayloadAction<OnCancelIndicationStart>): Generator<any,any> {
  try {
      // put your business logic here
      // yield call(someAPI, action.payload.someParam);
      // yield put(onCancelIndicationSuccess(onCancelIndication));
  } catch (e: any) {
      yield put(onCancelIndicationError(e.message));
  }
}

function* onCancelIndicationEventsSaga() {
  yield takeLatest(onCancelIndicationStart, onCancelIndicationSaga);
}

export default onCancelIndicationEventsSaga;
