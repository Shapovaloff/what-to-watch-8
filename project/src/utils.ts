import {Film} from './types/film';

export const getFilm = (films: Film[], id: number): any => films.slice().find((film: Film) => film.id === id);

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
