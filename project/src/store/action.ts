import {ActionType, ChangeFilterAction, ChangeNavDescAction} from '../types/action';

export const changeFilter = (genre: string): ChangeFilterAction => ({
  type: ActionType.ChangeFilter,
  payload: genre,
});

export const changeNavDesc = (navItem: string): ChangeNavDescAction => ({
  type: ActionType.ChangeNavDesc,
  payload: navItem,
});
