import type { ThunkActionCommon } from '../../../common/types';
import {
    maxSearchNumberSelector, minSearchNumberSelector,
} from './selectors';
import { mainPageSliceActions } from './slice';

const {
    setMaxSearchNumber,
    setMinSearchNumber,
} = mainPageSliceActions;

const changeMinSearchNumber = (paramsMinSearchNumber?: number): ThunkActionCommon => (dispatch, getState) => {
    const minSearchNumber = minSearchNumberSelector(getState());
    let newMinSearchNumber = paramsMinSearchNumber;

    if (newMinSearchNumber) {
        dispatch(setMinSearchNumber(newMinSearchNumber));

        return;
    }

    newMinSearchNumber = minSearchNumber + 1;
    dispatch(setMinSearchNumber(newMinSearchNumber));
};

const changeMaxSearchNumber = (paramsMaxSearchNumber?: number): ThunkActionCommon => (dispatch, getState) => {
    const maxSearchNumber = maxSearchNumberSelector(getState());
    let newMaxSearchNumber = paramsMaxSearchNumber;

    if (newMaxSearchNumber) {
        dispatch(setMaxSearchNumber(newMaxSearchNumber));

        return;
    }

    newMaxSearchNumber = maxSearchNumber - 1;
    dispatch(setMaxSearchNumber(newMaxSearchNumber));
};

export const mainPageActions = {
    changeMinSearchNumber,
    changeMaxSearchNumber,
};
