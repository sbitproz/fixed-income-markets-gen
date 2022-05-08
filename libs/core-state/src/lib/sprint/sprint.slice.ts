
import {
  createAction,
  createEntityAdapter,
  createSlice,
  EntityState,
  PayloadAction
} from '@reduxjs/toolkit';
import { Sprint } from '@fixed-income-markets/core-types';
import {
  loadedStatus,
  loadedStatusFactory,
  loadingStatus,
  LoadingStatus,
  loadErrorStatus,
  GeneralState
} from '../redux.types';
    
export const SPRINTS_SLICE_FEATURE_KEY = 'sprints';

export interface SprintSlice extends EntityState<Sprint>, GeneralState {
  selectedId?: string | number; // which Sprints record has been selected
  loadingStatus: LoadingStatus;
  error?: string;
}

export const sprintSliceAdapter = createEntityAdapter<Sprint>();

const initialState: SprintSlice = sprintSliceAdapter.getInitialState({
  loadingStatus: 'idle',
  error: undefined,
});

const upsertManyLoadedStatus = loadedStatusFactory<SprintSlice, Sprint[]>(sprintSliceAdapter.upsertMany);
  
export const sprintSlice = createSlice({
  name: SPRINTS_SLICE_FEATURE_KEY,
  initialState: initialState,
  reducers: {
    sprintAdded: (state, action) => {
      loadedStatus(state, action, sprintSliceAdapter.addOne)
    }, 
    sprintRemoved: (state, action) => {
      loadedStatus(state, action, sprintSliceAdapter.removeOne)
    }, 
    sprintUpdated: (state, action) => {
      loadedStatus(state, action, sprintSliceAdapter.updateOne)
    }, 
    sprintFetched: (state, action) => {
      loadedStatus(state, action, sprintSliceAdapter.upsertOne)
    },
    sprintsListed: upsertManyLoadedStatus,
    sprintByIssuerIdListed: upsertManyLoadedStatus,
    removalAllSprint: (state, action) => {
      loadedStatus(state, action, sprintSliceAdapter.removeAll)
    },
    listSprints: (state) => loadingStatus(state),
    fetchSprint: (state, _) => loadingStatus(state),
    addSprint: (state, _) => loadingStatus(state),
    removeSprint: (state, _) => loadingStatus(state),
    updateSprint: (state, _) => loadingStatus(state),    
    addSprintError: loadErrorStatus,
    removeSprintError: loadErrorStatus,
    updateSprintError: loadErrorStatus,
    fetchSprintError: loadErrorStatus,
    listSprintsError: loadErrorStatus,
    listSprintsByIssuerId: (state, _) => loadingStatus(state),
    listSprintsByIssuerIdError: loadErrorStatus,
    listSprintsByTitle: (state, action: PayloadAction<{ title: string }>) => loadingStatus(state),
    sprintByTitleListed: (state, action) => {
      sprintSliceAdapter.removeAll(state)
      upsertManyLoadedStatus(state, action)
    },
    listSprintsByTitleError: loadErrorStatus,
  },

});

export default sprintSlice.reducer;

export const { 
  addSprint,
  removeSprint,
  updateSprint,
  listSprints, 
  fetchSprint,
  sprintAdded, 
  sprintRemoved, 
  sprintUpdated, 
  sprintsListed, 
  sprintFetched, 
  listSprintsByIssuerId,
  sprintByIssuerIdListed,
  listSprintsByIssuerIdError,
  listSprintsByTitle,
  sprintByTitleListed,
  listSprintsByTitleError,
  addSprintError,
  removeSprintError,
  updateSprintError,
  fetchSprintError,
  listSprintsError,
} = sprintSlice.actions;


