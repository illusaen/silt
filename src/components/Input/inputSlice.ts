import { RootState } from '../../app/store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type InputState = InputPayload & {
  processed: string[];
}

export interface InputPayload {
  command: string;
  timestamp: string;
}

const processInputs = ( data: string ): string[] => {
  const r = data.replace( '\n', ';' ).split( ';' );
  return r.reduce( ( acc, curr ) => {
    if ( curr === '' ) return acc;

    let modifiedCurrent = curr;
    if ( curr.at( -1 ) === '\\' ) {
      modifiedCurrent = curr.slice( 0, -1 ) + ';';
    }

    if ( acc.at( -1 ) && acc.at( -1 ).at( -1 ) === ';' ) {
      return [ ...acc.slice( 0, -1 ), acc.at( -1 ) + modifiedCurrent ];
    }

    return [ ...acc, modifiedCurrent ];
  }, [] );
};

const initialState: InputState[] = [];

export const inputsSlice = createSlice( {
  name: 'inputs',
  initialState,
  reducers: {
    add: ( state, action: PayloadAction<InputPayload> ) => {
      state.push( { ...action.payload, processed: processInputs( action.payload.command ) } );
    }
  }
} );

export const { add } = inputsSlice.actions;

export const selectInputs = ( state: RootState ) => state;

export default inputsSlice.reducer;
