import {Film} from './types/film';

export const getFilm = (films: Film[], id: number): any => films.slice().find((film: Film) => film.id === id);
