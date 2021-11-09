import {ActionType, ChangeFilterAction} from '../types/action';

export const changeFilter = (genre: string): ChangeFilterAction => ({
  type: ActionType.ChangeFilter,
  payload: genre,
});
