
import { createAction } from '@reduxjs/toolkit';

export interface OnUploadProfilePictureStart { }

export const onUploadProfilePictureStart = createAction<OnUploadProfilePictureStart>('onUploadProfilePictures/onUploadProfilePictureStart');

export const onUploadProfilePictureError = createAction<string>('onUploadProfilePictures/onUploadProfilePictureError');

export interface OnUploadProfilePictureSuccess { }

export const onUploadProfilePictureSuccess = createAction<OnUploadProfilePictureSuccess>('onUploadProfilePictures/onUploadProfilePictureSuccess');
