
import { call, put, takeLatest } from 'redux-saga/effects'
import { PayloadAction } from '@reduxjs/toolkit';
import { onAnswerIndicationError, onAnswerIndicationStart, onAnswerIndicationSuccess, OnAnswerIndicationStart } from './onAnswerIndication.actions';

function* onAnswerIndicationSaga(action: PayloadAction<OnAnswerIndicationStart>): Generator<any,any> {
  try {
      // put your business logic here
      // yield call(someAPI, action.payload.someParam);
      // yield put(onAnswerIndicationSuccess(onAnswerIndication));
  } catch (e: any) {
      yield put(onAnswerIndicationError(e.message));
  }
}

function* onAnswerIndicationEventsSaga() {
  yield takeLatest(onAnswerIndicationStart, onAnswerIndicationSaga);
}

export default onAnswerIndicationEventsSaga;
