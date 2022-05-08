
import { createAction } from '@reduxjs/toolkit';

export interface OnAnswerIndicationStart { }

export const onAnswerIndicationStart = createAction<OnAnswerIndicationStart>('onAnswerIndications/onAnswerIndicationStart');

export const onAnswerIndicationError = createAction<string>('onAnswerIndications/onAnswerIndicationError');

export interface OnAnswerIndicationSuccess { }

export const onAnswerIndicationSuccess = createAction<OnAnswerIndicationSuccess>('onAnswerIndications/onAnswerIndicationSuccess');
