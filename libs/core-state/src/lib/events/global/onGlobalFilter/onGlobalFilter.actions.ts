
import { createAction } from '@reduxjs/toolkit';

export interface OnGlobalFilterStart { }

export const onGlobalFilterStart = createAction<OnGlobalFilterStart>('onGlobalFilters/onGlobalFilterStart');

export const onGlobalFilterError = createAction<string>('onGlobalFilters/onGlobalFilterError');

export interface OnGlobalFilterSuccess { }

export const onGlobalFilterSuccess = createAction<OnGlobalFilterSuccess>('onGlobalFilters/onGlobalFilterSuccess');
