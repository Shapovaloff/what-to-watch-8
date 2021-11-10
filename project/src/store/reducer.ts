import {films} from '../moks/films';
import {comments} from '../moks/comments';
import {State} from '../types/state';
import {ALL_GENRES, CardDescrNav} from '../const';
import {Actions, ActionType} from '../types/action';

const initialState = {
  films,
  comments,
  activeGenre: ALL_GENRES,
  navItemDesc: CardDescrNav.Overview,
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ChangeFilter:
      return {...state, activeGenre: action.payload};
    case ActionType.ChangeNavDesc:
      return {...state, navItemDesc: action.payload};
    default:
      return state;
  }
};

export {reducer};
