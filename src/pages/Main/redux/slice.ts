import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { IMainPageState } from './types';

const initialState: IMainPageState = {
    minSearchNumber: 1,
    maxSearchNumber: 999,
};

export const {
    reducer: mainPageReducer,
    actions: mainPageSliceActions,
} = createSlice({
    name: 'mainPage',
    initialState,
    reducers: {
        setMinSearchNumber(state, { payload }: PayloadAction<number>) {
            state.minSearchNumber = payload;
        },

        setMaxSearchNumber(state, { payload }: PayloadAction<number>) {
            state.maxSearchNumber = payload;
        },
    },

});
