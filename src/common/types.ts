import type {
    FC,
    PropsWithChildren,
} from 'react';

export type Func<Args extends Array<unknown> = Array<never>, Return = void> = (...args: Args) => Return;

export type Nullable<T> = (null | T);

export type TNumStr = (number | string);

export type CFC<P = unknown> = FC<PropsWithChildren<P>>;
