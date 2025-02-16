import { mainPageActions } from '../../screens/MainScreen/redux/actions';
import {
    MAX_SEARCH_NUMBER, MIN_SEARCH_NUMBER,
} from '../constants';
import { appSliceActions } from './slice';
import type {
    ThunkActionCommon, TNumStr,
} from '../types';

const {
    changeMaxSearchNumber,
    changeMinSearchNumber,
} = mainPageActions;

const { setIsInit } = appSliceActions;

const initApp = (minNumber: TNumStr, maxNumber: TNumStr): ThunkActionCommon => (dispatch, getState) => {
    dispatch(changeMinSearchNumber(Number(minNumber) || MIN_SEARCH_NUMBER));
    dispatch(changeMaxSearchNumber(Number(maxNumber) || MAX_SEARCH_NUMBER));

    dispatch(setIsInit(true));
};

export const appActions = { initApp };
