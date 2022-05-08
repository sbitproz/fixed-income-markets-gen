
import { createAction } from '@reduxjs/toolkit';

export interface OnRequestIndicationStart { }

export const onRequestIndicationStart = createAction<OnRequestIndicationStart>('onRequestIndications/onRequestIndicationStart');

export const onRequestIndicationError = createAction<string>('onRequestIndications/onRequestIndicationError');

export interface OnRequestIndicationSuccess { }

export const onRequestIndicationSuccess = createAction<OnRequestIndicationSuccess>('onRequestIndications/onRequestIndicationSuccess');
