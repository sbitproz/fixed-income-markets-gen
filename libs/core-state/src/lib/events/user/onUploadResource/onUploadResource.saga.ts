
import { call, put, takeLatest } from 'redux-saga/effects'
import { PayloadAction } from '@reduxjs/toolkit';
import { onUploadResourceError, onUploadResourceStart, onUploadResourceSuccess, OnUploadResourceStart } from './onUploadResource.actions';

function* onUploadResourceSaga(action: PayloadAction<OnUploadResourceStart>): Generator<any,any> {
  try {
      // put your business logic here
      // yield call(someAPI, action.payload.someParam);
      // yield put(onUploadResourceSuccess(onUploadResource));
  } catch (e: any) {
      yield put(onUploadResourceError(e.message));
  }
}

function* onUploadResourceEventsSaga() {
  yield takeLatest(onUploadResourceStart, onUploadResourceSaga);
}

export default onUploadResourceEventsSaga;
