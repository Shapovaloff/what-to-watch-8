import React, {ChangeEvent, FormEvent, Fragment, useState} from 'react';
import {INIT_COMMENT, INIT_RATING, MAX_RATING} from '../../const';

function ReviewForm(): JSX.Element {
  const arrayFields = new Array(MAX_RATING).fill(null).map((_, id) => id + 1).reverse();
  const [rating, setRating] = useState(INIT_RATING);
  const [comment, setComment] = useState(INIT_COMMENT);

  const handleRatingChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setRating(Number(evt.currentTarget.value));
  };

  const handleCommentChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(evt.currentTarget.value);
  };

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    setRating(INIT_RATING);
    setComment(INIT_COMMENT);
  };

  return (
    <div className="add-review">
      <form action="#" className="add-review__form" onSubmit={handleFormSubmit}>

        <div className="rating">
          <div className="rating__stars">
            {arrayFields.map((item) => {
              const isChecked = Number(item) === rating;

              return (
                <Fragment key={`rating-${item}`}>
                  <input className="rating__input" id={`star-${item}`} checked={isChecked} type="radio" name="rating" onChange={handleRatingChange} value={item}/>
                  <label className="rating__label" htmlFor={`star-${item}`}>Rating {item}</label>
                </Fragment>
              );
            })}
          </div>
        </div>

        <div className="add-review__text" style={{backgroundColor: 'rgba(255,255,255,.3)'}}>
          <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" onChange={handleCommentChange} value={comment} />
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ReviewForm;
