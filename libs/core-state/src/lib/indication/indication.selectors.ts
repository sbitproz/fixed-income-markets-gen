
import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { indicationSliceAdapter, IndicationSlice, INDICATIONS_SLICE_FEATURE_KEY } from './indication.slice';

const { selectAll, selectEntities, selectById: selectIndicationById, selectIds: selectIndicationByIds } = indicationSliceAdapter.getSelectors();

export { selectIndicationById, selectIndicationByIds };

export const getIndications = (rootState: RootState): IndicationSlice =>
  rootState[INDICATIONS_SLICE_FEATURE_KEY];

export const selectAllIndications = createSelector(
  getIndications,
  selectAll
);

export const selectIndicationEntities = createSelector(
  getIndications,
  selectEntities
);

export const selectIndicationLoadingStatus = createSelector(
  getIndications,
  ({loadingStatus, error}) => ({ loadingStatus, error })
);
