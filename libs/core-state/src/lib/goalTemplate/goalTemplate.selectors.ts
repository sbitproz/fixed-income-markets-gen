
import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { goalTemplateSliceAdapter, GoalTemplateSlice, GOALTEMPLATES_SLICE_FEATURE_KEY } from './goalTemplate.slice';

const { selectAll, selectEntities, selectById: selectGoalTemplateById, selectIds: selectGoalTemplateByIds } = goalTemplateSliceAdapter.getSelectors();

export { selectGoalTemplateById, selectGoalTemplateByIds };

export const getGoalTemplates = (rootState: RootState): GoalTemplateSlice =>
  rootState[GOALTEMPLATES_SLICE_FEATURE_KEY];

export const selectAllGoalTemplates = createSelector(
  getGoalTemplates,
  selectAll
);

export const selectGoalTemplateEntities = createSelector(
  getGoalTemplates,
  selectEntities
);

export const selectGoalTemplateLoadingStatus = createSelector(
  getGoalTemplates,
  ({loadingStatus, error}) => ({ loadingStatus, error })
);
