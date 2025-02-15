import { configureStore } from '@reduxjs/toolkit';

import { mainPageReducer } from '../pages/Main/redux/slice';

export const store = configureStore({ reducer: { mainPage: mainPageReducer } });
