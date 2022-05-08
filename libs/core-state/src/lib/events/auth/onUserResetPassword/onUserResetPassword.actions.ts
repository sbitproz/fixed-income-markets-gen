
import { createAction } from '@reduxjs/toolkit';

export interface OnUserResetPasswordStart { }

export const onUserResetPasswordStart = createAction<OnUserResetPasswordStart>('onUserResetPassword/onUserResetPasswordStart');

export const onUserResetPasswordError = createAction<string>('onUserResetPassword/onUserResetPasswordError');

export interface OnUserResetPasswordSuccess { }

export const onUserResetPasswordSuccess = createAction<OnUserResetPasswordSuccess>('onUserResetPassword/onUserResetPasswordSuccess');
