import type { IMainPageState } from '../../screens/MainScreen/redux/types';

export interface IRootState {
    app: IAppState;
    mainPage: IMainPageState;
}

export interface IAppState {
    isInit: boolean;
}
