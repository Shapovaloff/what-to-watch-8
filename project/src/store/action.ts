import {ActionType} from '../types/action';

export const changeFilter = (genre: string) => ({
  type: ActionType.ChangeFilter,
  payload: genre,
} as const);

export const changeNavDesc = (navItem: string) => ({
  type: ActionType.ChangeNavDesc,
  payload: navItem,
} as const);
