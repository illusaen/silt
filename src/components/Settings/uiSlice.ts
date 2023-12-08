import { RootState } from '../../app/store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UIState {
    currentId: string;
    settingsShown: boolean;
    debugShown: boolean;
}

const initialState: UIState = { currentId: '', settingsShown: false, debugShown: false };

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        setCurrent: (state, action: PayloadAction<string>) => {
            state.currentId = action.payload;
        },
        toggleSettings: (state) => {
            state.settingsShown = !state.settingsShown;
        },
        toggleDebug: (state) => {
            state.debugShown = !state.debugShown;
        },
    }
});

export const { setCurrent, toggleSettings, toggleDebug } = uiSlice.actions;

export const selectCurrentId = (state: RootState) => state.ui.currentId;
export const selectSettingsShown = (state: RootState) => state.ui.settingsShown;
export const selectDebugShown = (state: RootState) => state.ui.debugShown;

export default uiSlice.reducer;
