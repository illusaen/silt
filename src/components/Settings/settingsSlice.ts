import { RootState } from '../../app/store';
import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';

export type SettingsState = SettingsPayload & {
    showTimestamp: boolean;
    echoInput: boolean;
    id: string;
    selectInputOnSubmit: boolean;
    isConnected: boolean;
}

export interface SettingsPayload {
    host: string;
    port: number;
    name: string;
}

const defaultSetting: SettingsState = {
    host: '',
    port: 0,
    name: '',
    showTimestamp: false,
    echoInput: true,
    selectInputOnSubmit: true,
    isConnected: false,
    id: crypto.randomUUID(),
};

const initialState: SettingsState[] = [];

export const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<SettingsPayload>) => {
            state.push({
                ...defaultSetting,
                ...action.payload,
                id: 'TEST',
            });
        }
    }
});

export const { add } = settingsSlice.actions;

export const selectSettings = (state: RootState) => state.settings;
const id = (_: RootState, id: string) => id;
export const selectSettingsById = createSelector(
    [selectSettings, id],
    (settings, id) => settings.find((setting) => setting.id === id) || defaultSetting);

export const selectShowTimestamp = createSelector(
    [selectSettingsById, id],
    (settings, id) => settings && settings?.showTimestamp || defaultSetting.showTimestamp
)

export default settingsSlice.reducer;
