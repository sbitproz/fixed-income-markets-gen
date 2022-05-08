
import { configureStore } from '@reduxjs/toolkit'

import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './root.saga';
import usersReducer from './user/user.slice';
import sprintsReducer from './sprint/sprint.slice';
import indicationsReducer from './indication/indication.slice';
import goalTemplatesReducer from './goalTemplate/goalTemplate.slice';
import layoutReducer from './layout/layout.reducer';
import currentUserReducer from './currentUser/currentUser.reducer';
import globalFilterReducer from './globalFilter/globalFilter.reducer';

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
      users: usersReducer,
      sprints: sprintsReducer,
      indications: indicationsReducer,
      goalTemplates: goalTemplatesReducer,
      layout: layoutReducer,
      currentUser: currentUserReducer,
      globalFilter: globalFilterReducer,
  },
  middleware:  (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
    thunk: false
  }).concat(sagaMiddleware)
})



sagaMiddleware.run(rootSaga)

export const rootState = store.getState();

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

