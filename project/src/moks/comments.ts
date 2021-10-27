import {Comment} from '../types/comment';

export const comments: Comment[] = [
  {
    id: 1,
    user: {
      id: 18,
      name: 'Sophie',
    },
    rating: 8.2,
    comment: 'A movie that will take you to another world full of emotions.',
    date: '2021-09-27T08:55:17.870Z',
  },
  {
    id: 2,
    user: {
      id: 13,
      name: 'Zak',
    },
    rating: 6,
    comment: 'A movie that will take you to another world full of emotions.',
    date: '2021-10-05T08:55:17.870Z',
  },
  {
    id: 3,
    user: {
      id: 11,
      name: 'Jack',
    },
    rating: 9.1,
    comment: 'I personally found this movie to be boring. Definitely one of the most boring movies Ive ever seen.',
    date: '2021-09-28T08:55:17.870Z',
  },
];
