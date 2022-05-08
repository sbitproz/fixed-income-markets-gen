
import {
  createAction,
  createEntityAdapter,
  createSlice,
  EntityState,
  PayloadAction
} from '@reduxjs/toolkit';
import { User } from '@fixed-income-markets/core-types';
import {
  loadedStatus,
  loadedStatusFactory,
  loadingStatus,
  LoadingStatus,
  loadErrorStatus,
  GeneralState
} from '../redux.types';
    
export const USERS_SLICE_FEATURE_KEY = 'users';

export interface UserSlice extends EntityState<User>, GeneralState {
  selectedId?: string | number; // which Users record has been selected
  loadingStatus: LoadingStatus;
  error?: string;
}

export const userSliceAdapter = createEntityAdapter<User>();

const initialState: UserSlice = userSliceAdapter.getInitialState({
  loadingStatus: 'idle',
  error: undefined,
});

const upsertManyLoadedStatus = loadedStatusFactory<UserSlice, User[]>(userSliceAdapter.upsertMany);
  
export const userSlice = createSlice({
  name: USERS_SLICE_FEATURE_KEY,
  initialState: initialState,
  reducers: {
    userAdded: (state, action) => {
      loadedStatus(state, action, userSliceAdapter.addOne)
    }, 
    userRemoved: (state, action) => {
      loadedStatus(state, action, userSliceAdapter.removeOne)
    }, 
    userUpdated: (state, action) => {
      loadedStatus(state, action, userSliceAdapter.updateOne)
    }, 
    userFetched: (state, action) => {
      loadedStatus(state, action, userSliceAdapter.upsertOne)
    },
    usersListed: upsertManyLoadedStatus,
    removalAllUser: (state, action) => {
      loadedStatus(state, action, userSliceAdapter.removeAll)
    },
    listUsers: (state) => loadingStatus(state),
    fetchUser: (state, _) => loadingStatus(state),
    addUser: (state, _) => loadingStatus(state),
    removeUser: (state, _) => loadingStatus(state),
    updateUser: (state, _) => loadingStatus(state),    
    addUserError: loadErrorStatus,
    removeUserError: loadErrorStatus,
    updateUserError: loadErrorStatus,
    fetchUserError: loadErrorStatus,
    listUsersError: loadErrorStatus,
  },

});

export default userSlice.reducer;

export const { 
  addUser,
  removeUser,
  updateUser,
  listUsers, 
  fetchUser,
  userAdded, 
  userRemoved, 
  userUpdated, 
  usersListed, 
  userFetched, 
  addUserError,
  removeUserError,
  updateUserError,
  fetchUserError,
  listUsersError,
} = userSlice.actions;


