import { RootState } from './store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface InputState {
  command: string;
  timestamp: number;
}

const initialState: InputState[] = [];

export const inputsSlice = createSlice( {
  name: 'inputs',
  initialState,
  reducers: {
    add: ( state, action: PayloadAction<InputState> ) => {
      state.push( action.payload );
    }
  }
} );

export const { add } = inputsSlice.actions;

export const selectInputs = ( state: RootState ) => state;

export default inputsSlice.reducer;
