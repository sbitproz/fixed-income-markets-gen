
import {
  createAction,
  createEntityAdapter,
  createSlice,
  EntityState,
  PayloadAction
} from '@reduxjs/toolkit';
import { GoalTemplate } from '@fixed-income-markets/core-types';
import {
  loadedStatus,
  loadedStatusFactory,
  loadingStatus,
  LoadingStatus,
  loadErrorStatus,
  GeneralState
} from '../redux.types';
    
export const GOALTEMPLATES_SLICE_FEATURE_KEY = 'goalTemplates';

export interface GoalTemplateSlice extends EntityState<GoalTemplate>, GeneralState {
  selectedId?: string | number; // which GoalTemplates record has been selected
  loadingStatus: LoadingStatus;
  error?: string;
}

export const goalTemplateSliceAdapter = createEntityAdapter<GoalTemplate>();

const initialState: GoalTemplateSlice = goalTemplateSliceAdapter.getInitialState({
  loadingStatus: 'idle',
  error: undefined,
});

const upsertManyLoadedStatus = loadedStatusFactory<GoalTemplateSlice, GoalTemplate[]>(goalTemplateSliceAdapter.upsertMany);
  
export const goalTemplateSlice = createSlice({
  name: GOALTEMPLATES_SLICE_FEATURE_KEY,
  initialState: initialState,
  reducers: {
    goalTemplateAdded: (state, action) => {
      loadedStatus(state, action, goalTemplateSliceAdapter.addOne)
    }, 
    goalTemplateRemoved: (state, action) => {
      loadedStatus(state, action, goalTemplateSliceAdapter.removeOne)
    }, 
    goalTemplateUpdated: (state, action) => {
      loadedStatus(state, action, goalTemplateSliceAdapter.updateOne)
    }, 
    goalTemplateFetched: (state, action) => {
      loadedStatus(state, action, goalTemplateSliceAdapter.upsertOne)
    },
    goalTemplatesListed: upsertManyLoadedStatus,
    removalAllGoalTemplate: (state, action) => {
      loadedStatus(state, action, goalTemplateSliceAdapter.removeAll)
    },
    listGoalTemplates: (state) => loadingStatus(state),
    fetchGoalTemplate: (state, _) => loadingStatus(state),
    addGoalTemplate: (state, _) => loadingStatus(state),
    removeGoalTemplate: (state, _) => loadingStatus(state),
    updateGoalTemplate: (state, _) => loadingStatus(state),    
    addGoalTemplateError: loadErrorStatus,
    removeGoalTemplateError: loadErrorStatus,
    updateGoalTemplateError: loadErrorStatus,
    fetchGoalTemplateError: loadErrorStatus,
    listGoalTemplatesError: loadErrorStatus,
  },

});

export default goalTemplateSlice.reducer;

export const { 
  addGoalTemplate,
  removeGoalTemplate,
  updateGoalTemplate,
  listGoalTemplates, 
  fetchGoalTemplate,
  goalTemplateAdded, 
  goalTemplateRemoved, 
  goalTemplateUpdated, 
  goalTemplatesListed, 
  goalTemplateFetched, 
  addGoalTemplateError,
  removeGoalTemplateError,
  updateGoalTemplateError,
  fetchGoalTemplateError,
  listGoalTemplatesError,
} = goalTemplateSlice.actions;


