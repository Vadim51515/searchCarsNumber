import { mainPageActions } from '../../screens/MainScreen/redux/actions';
import {
    MAX_SEARCH_NUMBER, MIN_SEARCH_NUMBER,
} from '../constants';
import { appSliceActions } from './slice';
import type { ThunkActionCommon } from '../types';

const {
    changeMaxSearchNumber,
    changeMinSearchNumber,
} = mainPageActions;

const { setIsInit } = appSliceActions;

const initApp = (minNumber: string, maxNumber: string): ThunkActionCommon => (dispatch, getState) => {
    dispatch(changeMaxSearchNumber(Number(minNumber) || MIN_SEARCH_NUMBER));
    dispatch(changeMaxSearchNumber(Number(maxNumber) || MAX_SEARCH_NUMBER));

    dispatch(setIsInit(true));
};

export const appctions = { initApp };
