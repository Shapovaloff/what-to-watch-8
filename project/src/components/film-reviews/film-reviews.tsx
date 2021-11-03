import React from 'react';
import {Comment} from '../../types/comment';
import FilmReview from '../film-review/film-review';

type FilmReviewsProps = {
  comments: Comment[];
}

function FilmReviews({comments}: FilmReviewsProps): JSX.Element {
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {comments.map((comment) => (
          <FilmReview key={comment.id} review={comment} />
        ))}
      </div>
    </div>
  );
}

export default FilmReviews;
