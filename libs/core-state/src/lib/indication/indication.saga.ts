
import { call, put, takeLatest, CallEffect } from 'redux-saga/effects'
import { PayloadAction } from '@reduxjs/toolkit';
import { indicationsAPI, BaseEntity } from '@fixed-income-markets/core-data';
import { PutPayload } from "../redux.types";
import { 
  fetchIndication, fetchIndicationError, indicationFetched, 
  listIndications, listIndicationsError, indicationsListed,
  indicationUpdated , updateIndicationError, updateIndication,
  removeIndicationError, removeIndication, indicationRemoved,
  listIndicationsByIssuerId,
  listIndicationsByIssuerIdError,
  indicationByIssuerIdListed,
} from './indication.slice';
import { Indication } from '@fixed-income-markets/core-types';

function* fetchIndicationSaga(action: PayloadAction<BaseEntity>): Generator<CallEffect<BaseEntity> | PutPayload<Indication> | PutPayload<string>, void, Indication> {
  try {
      const indication = yield call(indicationsAPI.find, action.payload.id);
      yield put(indicationFetched(indication));
  } catch (e: any) {
      yield put(fetchIndicationError(e.message));
  }
}

function* listIndicationsSaga(): Generator<CallEffect | PutPayload<any> | PutPayload<string>, void, Indication[]> {
  try {
      const indications = yield call(indicationsAPI.load);
      yield put(indicationsListed(indications));
  } catch (e: any) {
      yield put(listIndicationsError(e.message));
  }
}

function* updateIndicationSaga(action: PayloadAction<Indication>): Generator<CallEffect<Indication> | PutPayload<any> | PutPayload<string>, void, Indication> { 
  try {
      const indication = yield call(indicationsAPI.update, action.payload);
      yield put(indicationUpdated({id: indication.id, changes: indication }));
  } catch (e: any) {
      yield put(updateIndicationError(e.message));
  }
}

function* removeIndicationSaga(action: PayloadAction<BaseEntity>): Generator<CallEffect | PutPayload<any> | PutPayload<string>, void, Indication> {
  try {
      const indication = yield call(indicationsAPI.remove, action.payload.id);
      yield put(indicationRemoved(indication.id));
  } catch (e: any) {
      yield put(removeIndicationError(e.message));
  }
}

function* listIndicationsByIssuerIdSaga(action: PayloadAction<{ issuerId: string }>): Generator<CallEffect | PutPayload<any> | PutPayload<string>, void, Indication[]> {
  try {
      const indication = yield call(indicationsAPI.loadBy, 'issuerId', action.payload.issuerId);
      yield put(indicationByIssuerIdListed(indication));
      
  } catch (e: any) {
      yield put(listIndicationsByIssuerIdError(e.message));
  }
}



function* indicationSaga() {
  yield takeLatest(fetchIndication, fetchIndicationSaga);
  yield takeLatest(listIndications, listIndicationsSaga);
  yield takeLatest(updateIndication, updateIndicationSaga);
  yield takeLatest(removeIndication, removeIndicationSaga);
  yield takeLatest(listIndicationsByIssuerId, listIndicationsByIssuerIdSaga);
}

export default indicationSaga;

  