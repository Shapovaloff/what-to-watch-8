export enum ActionType {
  ChangeFilter = 'filter/changeFilter',
}

export type ChangeFilterAction = {
  type: ActionType.ChangeFilter;
  payload: string;
}

export type Actions = ChangeFilterAction;
