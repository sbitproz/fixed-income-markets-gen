
import { call, put, takeLatest, CallEffect } from 'redux-saga/effects'
import { PayloadAction } from '@reduxjs/toolkit';
import { sprintsAPI, BaseEntity } from '@fixed-income-markets/core-data';
import { PutPayload } from "../redux.types";
import { 
  fetchSprint, fetchSprintError, sprintFetched, 
  listSprints, listSprintsError, sprintsListed,
  sprintUpdated , updateSprintError, updateSprint,
  removeSprintError, removeSprint, sprintRemoved,
  listSprintsByIssuerId,
  listSprintsByIssuerIdError,
  sprintByIssuerIdListed,
  listSprintsByTitle,
  listSprintsByTitleError,
  sprintByTitleListed,
} from './sprint.slice';
import { Sprint } from '@fixed-income-markets/core-types';

function* fetchSprintSaga(action: PayloadAction<BaseEntity>): Generator<CallEffect<BaseEntity> | PutPayload<Sprint> | PutPayload<string>, void, Sprint> {
  try {
      const sprint = yield call(sprintsAPI.find, action.payload.id);
      yield put(sprintFetched(sprint));
  } catch (e: any) {
      yield put(fetchSprintError(e.message));
  }
}

function* listSprintsSaga(): Generator<CallEffect | PutPayload<any> | PutPayload<string>, void, Sprint[]> {
  try {
      const sprints = yield call(sprintsAPI.load);
      yield put(sprintsListed(sprints));
  } catch (e: any) {
      yield put(listSprintsError(e.message));
  }
}

function* updateSprintSaga(action: PayloadAction<Sprint>): Generator<CallEffect<Sprint> | PutPayload<any> | PutPayload<string>, void, Sprint> { 
  try {
      const sprint = yield call(sprintsAPI.update, action.payload);
      yield put(sprintUpdated({id: sprint.id, changes: sprint }));
  } catch (e: any) {
      yield put(updateSprintError(e.message));
  }
}

function* removeSprintSaga(action: PayloadAction<BaseEntity>): Generator<CallEffect | PutPayload<any> | PutPayload<string>, void, Sprint> {
  try {
      const sprint = yield call(sprintsAPI.remove, action.payload.id);
      yield put(sprintRemoved(sprint.id));
  } catch (e: any) {
      yield put(removeSprintError(e.message));
  }
}

function* listSprintsByIssuerIdSaga(action: PayloadAction<{ issuerId: string }>): Generator<CallEffect | PutPayload<any> | PutPayload<string>, void, Sprint[]> {
  try {
      const sprint = yield call(sprintsAPI.loadBy, 'issuerId', action.payload.issuerId);
      yield put(sprintByIssuerIdListed(sprint));
      
  } catch (e: any) {
      yield put(listSprintsByIssuerIdError(e.message));
  }
}


function* listSprintsByTitleSaga(action: PayloadAction<{ title: string }>): Generator<CallEffect | PutPayload<any> | PutPayload<string>, void, Sprint[]> {
  try {
      const sprint = yield call(sprintsAPI.load, `?title_like=${action.payload.title }`);
      yield put(sprintByTitleListed(sprint));
      
  } catch (e: any) {
      yield put(listSprintsByTitleError(e.message));
  }
}


function* sprintSaga() {
  yield takeLatest(fetchSprint, fetchSprintSaga);
  yield takeLatest(listSprints, listSprintsSaga);
  yield takeLatest(updateSprint, updateSprintSaga);
  yield takeLatest(removeSprint, removeSprintSaga);
  yield takeLatest(listSprintsByIssuerId, listSprintsByIssuerIdSaga);
  yield takeLatest(listSprintsByTitle, listSprintsByTitleSaga);
}

export default sprintSaga;

  