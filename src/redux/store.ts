import { configureStore } from '@reduxjs/toolkit';
import inputsReducer from './inputSlice';

export const store = configureStore( {
  reducer: {
    inputs: inputsReducer,
  }
} );

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
