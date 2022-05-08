
import { createAction } from '@reduxjs/toolkit';

export interface OnCancelIndicationStart { }

export const onCancelIndicationStart = createAction<OnCancelIndicationStart>('onCancelIndications/onCancelIndicationStart');

export const onCancelIndicationError = createAction<string>('onCancelIndications/onCancelIndicationError');

export interface OnCancelIndicationSuccess { }

export const onCancelIndicationSuccess = createAction<OnCancelIndicationSuccess>('onCancelIndications/onCancelIndicationSuccess');
