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

export enum CardDescrNav {
  Overview = 'Overview',
  Details = 'Details',
  Reviews = 'Reviews',
}

export const cardNav = ['Overview', 'Details', 'Reviews'];

export const ALL_GENRES = 'All genres';

export const MAX_RATING = 10;
export const INIT_RATING = 0;
export const INIT_COMMENT = '';
export const HOVER_DELAY = 1000;
export const CATALOG_PAGE_SIZE = 8;
export const CATALOG_INITIAL_PAGE = 1;
