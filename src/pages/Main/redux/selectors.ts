import {
    MAX_SEARCH_NUMBER, MIN_SEARCH_NUMBER,
} from '../../../common/constants';
import type { IRootState } from '../../../redux/types';
import type { TSearchNumberType } from '../types';

export const minSearchNumberSelector = (state: IRootState) => state.mainPage.minSearchNumber;
export const maxSearchNumberSelector = (state: IRootState) => state.mainPage.maxSearchNumber;

export const searchNumberSelector = (state: IRootState, type: TSearchNumberType) => {
    if (type === 'min') return minSearchNumberSelector(state);

    return maxSearchNumberSelector(state);
};

export const isSearchNumberCrossedSelector = (state: IRootState) => (
    state.mainPage.maxSearchNumber < state.mainPage.minSearchNumber
);
export const isFoundMaxSearchNumberSelector = (state: IRootState) => (
    state.mainPage.maxSearchNumber < MIN_SEARCH_NUMBER
);

export const isFoundMinSearchNumberSelector = (state: IRootState) => (
    state.mainPage.minSearchNumber > MAX_SEARCH_NUMBER
);
