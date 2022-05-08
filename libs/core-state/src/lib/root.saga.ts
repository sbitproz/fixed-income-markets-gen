
import { all, fork } from 'redux-saga/effects';
import userSaga from './user/user.saga';
import sprintSaga from './sprint/sprint.saga';
import indicationSaga from './indication/indication.saga';
import goalTemplateSaga from './goalTemplate/goalTemplate.saga';
import onGlobalFilterEventsSaga from './events/global/onGlobalFilter/onGlobalFilter.saga';
import onUploadResourceEventsSaga from './events/user/onUploadResource/onUploadResource.saga';
import onUploadProfilePictureEventsSaga from './events/user/onUploadProfilePicture/onUploadProfilePicture.saga';
import onUserLoginEventsSaga from './events/auth/onUserLogin/onUserLogin.saga';
import onFetchUserByEmailEventsSaga from './events/user/onFetchUserByEmail/onFetchUserByEmail.saga';
import onUserLogoutEventsSaga from './events/auth/onUserLogout/onUserLogout.saga';
import onUserResetPasswordEventsSaga from './events/auth/onUserResetPassword/onUserResetPassword.saga';
import onUserRegisterEventsSaga from './events/auth/onUserRegister/onUserRegister.saga';
import onRequestIndicationEventsSaga from './events/indication/onRequestIndication/onRequestIndication.saga';
import onCancelIndicationEventsSaga from './events/indication/onCancelIndication/onCancelIndication.saga';
import onAnswerIndicationEventsSaga from './events/indication/onAnswerIndication/onAnswerIndication.saga';


export function* rootSaga(){
  yield all([
    fork(userSaga),
    fork(sprintSaga),
    fork(indicationSaga),
    fork(goalTemplateSaga),
    fork(onGlobalFilterEventsSaga),
    fork(onUploadResourceEventsSaga),
    fork(onUploadProfilePictureEventsSaga),
    fork(onUserLoginEventsSaga),
    fork(onFetchUserByEmailEventsSaga),
    fork(onUserLogoutEventsSaga),
    fork(onUserResetPasswordEventsSaga),
    fork(onUserRegisterEventsSaga),
    fork(onRequestIndicationEventsSaga),
    fork(onCancelIndicationEventsSaga),
    fork(onAnswerIndicationEventsSaga),
  ]);
}  
