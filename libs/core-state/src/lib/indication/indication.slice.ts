
import {
  createAction,
  createEntityAdapter,
  createSlice,
  EntityState,
  PayloadAction
} from '@reduxjs/toolkit';
import { Indication } from '@fixed-income-markets/core-types';
import {
  loadedStatus,
  loadedStatusFactory,
  loadingStatus,
  LoadingStatus,
  loadErrorStatus,
  GeneralState
} from '../redux.types';
    
export const INDICATIONS_SLICE_FEATURE_KEY = 'indications';

export interface IndicationSlice extends EntityState<Indication>, GeneralState {
  selectedId?: string | number; // which Indications record has been selected
  loadingStatus: LoadingStatus;
  error?: string;
}

export const indicationSliceAdapter = createEntityAdapter<Indication>();

const initialState: IndicationSlice = indicationSliceAdapter.getInitialState({
  loadingStatus: 'idle',
  error: undefined,
});

const upsertManyLoadedStatus = loadedStatusFactory<IndicationSlice, Indication[]>(indicationSliceAdapter.upsertMany);
  
export const indicationSlice = createSlice({
  name: INDICATIONS_SLICE_FEATURE_KEY,
  initialState: initialState,
  reducers: {
    indicationAdded: (state, action) => {
      loadedStatus(state, action, indicationSliceAdapter.addOne)
    }, 
    indicationRemoved: (state, action) => {
      loadedStatus(state, action, indicationSliceAdapter.removeOne)
    }, 
    indicationUpdated: (state, action) => {
      loadedStatus(state, action, indicationSliceAdapter.updateOne)
    }, 
    indicationFetched: (state, action) => {
      loadedStatus(state, action, indicationSliceAdapter.upsertOne)
    },
    indicationsListed: upsertManyLoadedStatus,
    indicationByIssuerIdListed: upsertManyLoadedStatus,
    removalAllIndication: (state, action) => {
      loadedStatus(state, action, indicationSliceAdapter.removeAll)
    },
    listIndications: (state) => loadingStatus(state),
    fetchIndication: (state, _) => loadingStatus(state),
    addIndication: (state, _) => loadingStatus(state),
    removeIndication: (state, _) => loadingStatus(state),
    updateIndication: (state, _) => loadingStatus(state),    
    addIndicationError: loadErrorStatus,
    removeIndicationError: loadErrorStatus,
    updateIndicationError: loadErrorStatus,
    fetchIndicationError: loadErrorStatus,
    listIndicationsError: loadErrorStatus,
    listIndicationsByIssuerId: (state, _) => loadingStatus(state),
    listIndicationsByIssuerIdError: loadErrorStatus,
  },

});

export default indicationSlice.reducer;

export const { 
  addIndication,
  removeIndication,
  updateIndication,
  listIndications, 
  fetchIndication,
  indicationAdded, 
  indicationRemoved, 
  indicationUpdated, 
  indicationsListed, 
  indicationFetched, 
  listIndicationsByIssuerId,
  indicationByIssuerIdListed,
  listIndicationsByIssuerIdError,
  addIndicationError,
  removeIndicationError,
  updateIndicationError,
  fetchIndicationError,
  listIndicationsError,
} = indicationSlice.actions;


