import type {
    ActionCreatorsMapObject,
    ThunkAction,
} from '@reduxjs/toolkit';

export interface ITheme {
    primaryColor: string;
    backgroundColor: string;
    textForPrimaryColor: string;
    textColor: string;
    borderColor: string;
}

export type TUseActions<M extends ActionCreatorsMapObject<unknown>> = {
    [N in keyof M]: ReturnType<M[N]> extends ThunkAction<unknown, unknown, unknown, never>
        ? (...args: Parameters<M[N]>) => ReturnType<ReturnType<M[N]>>
        : M[N]
};
