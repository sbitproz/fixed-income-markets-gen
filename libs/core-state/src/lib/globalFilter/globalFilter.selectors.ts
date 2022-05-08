
import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

export const selectGlobalFilter = (state: RootState) => state.globalFilter

export const selectGlobalFilterSearch = createSelector(
  selectGlobalFilter,
  ({ search }) => search
)
export const selectGlobalFilterIndications = createSelector(
  selectGlobalFilter,
  ({ indications }) => indications
)
