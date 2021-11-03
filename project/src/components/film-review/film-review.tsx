import React from 'react';
import {Comment} from '../../types/comment';
import {getDateLocaleString} from '../../utils';

type FilmReviewProps = {
  review: Comment;
}

function FilmReview({review}: FilmReviewProps): JSX.Element {
  const {user, rating, comment, date} = review;

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment}</p>

        <footer className="review__details">
          <cite className="review__author">{user.name}</cite>
          <time className="review__date" dateTime="2016-12-24">{getDateLocaleString(date)}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{rating}</div>
    </div>
  );
}

export default FilmReview;
