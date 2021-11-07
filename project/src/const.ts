export enum AppRoute {
  Login = '/login',
  Root = '/',
  MyList = '/my-list',
  Film = '/film/:id',
  Review = '/film/:id/review',
  Player = '/player/:id',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const cardNav = ['Overview', 'Details', 'Reviews'];

export const Genres = {
  ALL: 'All genres',
  COMEDIES: 'Comedies',
  CRIME: 'Crime',
  DOCUMENTARY: 'Documentary',
  DRAMS: 'Dramas',
  HORROR: 'Horror',
  KIDS: 'Kids & Family',
  ROMANCE: 'Romance',
  SCI_FI: 'Sci-Fi',
  THRILLERS: 'Thrillers',
};

export const MAX_RATING = 10;
export const INIT_RATING = 0;
export const INIT_COMMENT = '';
export const HOVER_DELAY = 1000;
