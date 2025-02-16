import { configureStore } from '@reduxjs/toolkit';

import { mainPageReducer } from '../../screens/MainScreen/redux/slice';
import { appReducer } from './slice';

export const store = configureStore({
    reducer: {
        mainPage: mainPageReducer,
        app: appReducer,
    },
});
