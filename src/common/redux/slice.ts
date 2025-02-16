import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { IAppState } from './types';

const initialState: IAppState = { isInit: false };

export const {
    reducer: appReducer,
    actions: appSliceActions,
} = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setIsInit(state, { payload }: PayloadAction<boolean>) {
            state.isInit = payload;
        },
    },

});
