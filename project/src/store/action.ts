import {ActionType, ChangeFilterAction} from '../types/action';

export const ChangeFilter = (genre: string): ChangeFilterAction => ({
  type: ActionType.ChangeFilter,
  payload: genre,
});
