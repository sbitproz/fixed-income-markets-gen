
import { createAction } from '@reduxjs/toolkit';

export interface OnUserLogoutStart { }

export const onUserLogoutStart = createAction<OnUserLogoutStart>('onUserLogout/onUserLogoutStart');

export const onUserLogoutError = createAction<string>('onUserLogout/onUserLogoutError');

export interface OnUserLogoutSuccess { }

export const onUserLogoutSuccess = createAction<OnUserLogoutSuccess>('onUserLogout/onUserLogoutSuccess');
