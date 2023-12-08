import { RootState } from './store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface OutputState {
  raw: string;
  processed: string;
  timestamp: number;
}

const initialState: OutputState[] = [];

export const outputsSlice = createSlice( {
  name: 'inputs',
  initialState,
  reducers: {
    add: ( state, action: PayloadAction<OutputState> ) => {
      state.push( action.payload );
    }
  }
} );

export const { add } = outputsSlice.actions;

export const selectOutputs = ( state: RootState ) => state;

export default outputsSlice.reducer;
