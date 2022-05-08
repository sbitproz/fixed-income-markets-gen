import { GlobalFilter } from '@fixed-income-markets/core-types';  
import {
  createAction,
  createReducer,
} from '@reduxjs/toolkit'

export const setGlobalFilter = createAction<Partial<GlobalFilter>>('globalFilters/setGlobalFilter')

export const clearGlobalFilter = createAction('globalFilters/clearGlobalFilter')

export const GLOBALFILTERS_FEATURE_KEY = 'globalFilters';

const initialState: Partial<GlobalFilter> = { };

const globalFilterReducer = createReducer(initialState,
  (builder) => {
    builder
      .addCase(setGlobalFilter, (state, action) => {
        return {...state, ...action.payload}
      })
      .addCase(clearGlobalFilter, () => {
        return {}
      })
  }
)

export default globalFilterReducer;