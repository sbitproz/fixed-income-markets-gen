
import { createAction } from '@reduxjs/toolkit';

export interface OnUserRegisterStart { }

export const onUserRegisterStart = createAction<OnUserRegisterStart>('onUserRegister/onUserRegisterStart');

export const onUserRegisterError = createAction<string>('onUserRegister/onUserRegisterError');

export interface OnUserRegisterSuccess { }

export const onUserRegisterSuccess = createAction<OnUserRegisterSuccess>('onUserRegister/onUserRegisterSuccess');
