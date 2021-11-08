import {films} from '../moks/films'
import {comments} from '../moks/comments';
import {State} from '../types/state';
import {Genres} from '../const';
import {Actions, ActionType} from '../types/action';

const initialState = {
  films,
  comments,
  activeGenre: Genres.ALL,
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
