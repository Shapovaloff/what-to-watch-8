import {changeFilter, changeNavDesc} from '../store/action';

export enum ActionType {
  ChangeFilter = 'filter/changeFilter',
  ChangeNavDesc = 'tab/changeNavDesc',
}

export type Actions =
  | ReturnType<typeof changeFilter>
  | ReturnType<typeof changeNavDesc>;
