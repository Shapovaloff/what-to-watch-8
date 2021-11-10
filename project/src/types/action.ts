export enum ActionType {
  ChangeFilter = 'filter/changeFilter',
  ChangeNavDesc = 'tab/changeNavDesc',
}

export type ChangeFilterAction = {
  type: ActionType.ChangeFilter;
  payload: string;
};

export type ChangeNavDescAction = {
  type: ActionType.ChangeNavDesc;
  payload: string;
};

export type Actions = ChangeFilterAction | ChangeNavDescAction;
