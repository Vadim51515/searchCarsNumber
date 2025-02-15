import type { Func } from '../../common/types';

export type TSearchNumberType = 'min' | 'max';

export interface ICarsNumberForm {
    type: TSearchNumberType;
    changeSearchNumber: Func;
}
