
import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { userSliceAdapter, UserSlice, USERS_SLICE_FEATURE_KEY } from './user.slice';

const { selectAll, selectEntities, selectById: selectUserById, selectIds: selectUserByIds } = userSliceAdapter.getSelectors();

export { selectUserById, selectUserByIds };

export const getUsers = (rootState: RootState): UserSlice =>
  rootState[USERS_SLICE_FEATURE_KEY];

export const selectAllUsers = createSelector(
  getUsers,
  selectAll
);

export const selectUserEntities = createSelector(
  getUsers,
  selectEntities
);

export const selectUserLoadingStatus = createSelector(
  getUsers,
  ({loadingStatus, error}) => ({ loadingStatus, error })
);
