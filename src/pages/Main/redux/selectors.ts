import type { IRootState } from '../../../redux/types';
import type { TSearchNumberType } from '../types';

export const minSearchNumberSelector = (state: IRootState) => state.mainPage.minSearchNumber;
export const maxSearchNumberSelector = (state: IRootState) => state.mainPage.maxSearchNumber;

export const searchNumberSelector = (state: IRootState, type: TSearchNumberType) => {
    if (type === 'min') return minSearchNumberSelector(state);

    return maxSearchNumberSelector(state);
};
