import {Film} from './types/film';
import {ALL_GENRES} from './const';

export const getFilm = (films: Film[], id: number): Film => {
  const copyFilms = films.slice();
  const findFilms = copyFilms.find((film: Film) => film.id === id);
  if (!findFilms) {
    return copyFilms[0];
  }
  return findFilms;
};

export const getTimeToString = (time: number): string => {
  const h = Math.floor(Number(time) / 60);
  const min = Number(time) % 60;
  return `${h}h ${min}m`;
};

export const getDateLocaleString = (date: string): string => new Date(date).toLocaleDateString('en-US', {month: 'long', day: 'numeric', year: 'numeric'});

export const splitArrayInTwo = <T>(items: T[]): [T[], T[]] => {
  const middleIndex = Math.ceil(items.length / 2);
  return [items.slice(0, middleIndex), items.slice(middleIndex)];
};

export const getSimilarFilms = (films: Film[], film: Film, id: number): Film[] => {
  const copyFilms = films.slice();
  const similarFilms =  copyFilms.filter((filmFilter: Film) => filmFilter.id !== Number(id) && film.genre === filmFilter.genre);
  return similarFilms.slice(0, 4);
};

export const filterFilmsGenre = (films: Film[], genre: string): Film[] => {
  if (!genre || genre.toLowerCase() === ALL_GENRES.toLowerCase()) {
    return films;
  }

  const filterFilms = films.slice().filter((film: Film) => film.genre.toLowerCase() === genre.toLowerCase());
  return filterFilms;
};

export const getGenreFilms = (films: Film[]): Array<string> => {
  if (!films.length) {
    return [];
  }

  const genre = new Set<string>();
  films.forEach((film: Film) => genre.add(film.genre));

  return [ALL_GENRES, ...Array.from(genre).slice(0, 9)];
};
