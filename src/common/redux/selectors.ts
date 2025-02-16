import type { IRootState } from './types';

export const isInitSelector = (state: IRootState) => state.app.isInit;
