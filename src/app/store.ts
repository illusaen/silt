import { configureStore } from '@reduxjs/toolkit';
import inputsReducer from '../components/Input/inputSlice';
import outputsReducer from '../components/Output/outputSlice';
import settingsReducer from '../components/Settings/settingsSlice';
import uiReducer from '../components/Settings/uiSlice';

export const store = configureStore({
  reducer: {
    inputs: inputsReducer,
    outputs: outputsReducer,
    settings: settingsReducer,
    ui: uiReducer,
  }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
