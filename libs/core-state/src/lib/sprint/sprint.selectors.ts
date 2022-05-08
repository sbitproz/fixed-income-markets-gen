
import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { sprintSliceAdapter, SprintSlice, SPRINTS_SLICE_FEATURE_KEY } from './sprint.slice';

const { selectAll, selectEntities, selectById: selectSprintById, selectIds: selectSprintByIds } = sprintSliceAdapter.getSelectors();

export { selectSprintById, selectSprintByIds };

export const getSprints = (rootState: RootState): SprintSlice =>
  rootState[SPRINTS_SLICE_FEATURE_KEY];

export const selectAllSprints = createSelector(
  getSprints,
  selectAll
);

export const selectSprintEntities = createSelector(
  getSprints,
  selectEntities
);

export const selectSprintLoadingStatus = createSelector(
  getSprints,
  ({loadingStatus, error}) => ({ loadingStatus, error })
);
