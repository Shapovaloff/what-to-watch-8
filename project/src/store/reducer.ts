import {films} from '../moks/films';
import {comments} from '../moks/comments';
import {State} from '../types/state';
import {ALL_GENRES} from '../const';
import {Actions, ActionType} from '../types/action';

const initialState = {
  films,
  comments,
  activeGenre: ALL_GENRES,
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ChangeFilter:
      return {...state, activeGenre: action.payload};
    default:
      return state;
  }
};

export {reducer};
