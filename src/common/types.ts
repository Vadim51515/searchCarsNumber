import type {
    FC,
    PropsWithChildren,
} from 'react';
import type {
    ThunkAction,
    UnknownAction,
} from '@reduxjs/toolkit';

import type { IRootState } from '../redux/types';

export type Func<Args extends Array<unknown> = Array<never>, Return = void> = (...args: Args) => Return;

export type Nullable<T> = (null | T);

export type TNumStr = (number | string);

export type CFC<P = unknown> = FC<PropsWithChildren<P>>;

export type ThunkActionCommon<R = void> = ThunkAction<R, IRootState, void, UnknownAction>;
