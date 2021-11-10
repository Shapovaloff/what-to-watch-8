import {Film} from './film';
import {Comment} from './comment';

export type State = {
  films: Film[];
  comments: Comment[];
  activeGenre: string;
  navItemDesc: string;
}
