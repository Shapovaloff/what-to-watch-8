import React from 'react';
import {Comment} from '../../types/comment';
import FilmReview from '../film-review/film-review';
import {splitArrayInTwo} from '../../utils';

type FilmReviewsProps = {
  comments: Comment[];
}

function FilmReviews({comments}: FilmReviewsProps): JSX.Element {
  const [ leftReviews, rightReviews ] = splitArrayInTwo(comments);
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {leftReviews.map((comment) => (
          <FilmReview key={comment.id} review={comment} />
        ))}
      </div>
      <div className="film-card__reviews-col">
        {rightReviews.map((comment) => (
          <FilmReview key={comment.id} review={comment} />
        ))}
      </div>
    </div>
  );
}

export default FilmReviews;
