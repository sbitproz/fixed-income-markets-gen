
import { createAction } from '@reduxjs/toolkit';

export interface OnUserLoginStart { }

export const onUserLoginStart = createAction<OnUserLoginStart>('onUserLogin/onUserLoginStart');

export const onUserLoginError = createAction<string>('onUserLogin/onUserLoginError');

export interface OnUserLoginSuccess { }

export const onUserLoginSuccess = createAction<OnUserLoginSuccess>('onUserLogin/onUserLoginSuccess');
