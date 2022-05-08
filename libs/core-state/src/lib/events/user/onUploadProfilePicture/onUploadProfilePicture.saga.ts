
import { call, put, takeLatest } from 'redux-saga/effects'
import { PayloadAction } from '@reduxjs/toolkit';
import { onUploadProfilePictureError, onUploadProfilePictureStart, onUploadProfilePictureSuccess, OnUploadProfilePictureStart } from './onUploadProfilePicture.actions';

function* onUploadProfilePictureSaga(action: PayloadAction<OnUploadProfilePictureStart>): Generator<any,any> {
  try {
      // put your business logic here
      // yield call(someAPI, action.payload.someParam);
      // yield put(onUploadProfilePictureSuccess(onUploadProfilePicture));
  } catch (e: any) {
      yield put(onUploadProfilePictureError(e.message));
  }
}

function* onUploadProfilePictureEventsSaga() {
  yield takeLatest(onUploadProfilePictureStart, onUploadProfilePictureSaga);
}

export default onUploadProfilePictureEventsSaga;
