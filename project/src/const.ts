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

export const Genres = ['All genres', 'Comedies', 'Crime', 'Documentary', 'Dramas', 'Horror', 'Kids & Family', 'Romance', 'Sci-Fi', 'Thrillers'];
export const MAX_RATING = 10;
export const INIT_RATING = 0;
export const INIT_COMMENT = '';
