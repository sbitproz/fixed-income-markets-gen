
import { createAction } from '@reduxjs/toolkit';

export interface OnUploadResourceStart { }

export const onUploadResourceStart = createAction<OnUploadResourceStart>('onUploadResources/onUploadResourceStart');

export const onUploadResourceError = createAction<string>('onUploadResources/onUploadResourceError');

export interface OnUploadResourceSuccess { }

export const onUploadResourceSuccess = createAction<OnUploadResourceSuccess>('onUploadResources/onUploadResourceSuccess');
