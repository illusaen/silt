import { RootState } from '../../app/store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Convert from 'ansi-to-html';

export type OutputState = OutputPayload & {
  processed: string;
}

export interface OutputPayload {
  raw: string;
  timestamp: string;
}

const initialState: OutputState[] = [];
const convert = new Convert();

export const outputsSlice = createSlice({
  name: 'outputs',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<OutputPayload>) => {
      state.push({
        ...action.payload,
        processed: convert.toHtml(action.payload.raw),
      });
    }
  }
});

export const { add } = outputsSlice.actions;

export const selectOutputs = (state: RootState) => state.outputs;

export default outputsSlice.reducer;
