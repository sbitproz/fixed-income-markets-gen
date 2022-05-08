
import { createAction } from '@reduxjs/toolkit';

export interface OnFetchUserByEmailStart { }

export const onFetchUserByEmailStart = createAction<OnFetchUserByEmailStart>('onFetchUserByEmail/onFetchUserByEmailStart');

export const onFetchUserByEmailError = createAction<string>('onFetchUserByEmail/onFetchUserByEmailError');

export interface OnFetchUserByEmailSuccess { }

export const onFetchUserByEmailSuccess = createAction<OnFetchUserByEmailSuccess>('onFetchUserByEmail/onFetchUserByEmailSuccess');
