import React, {Fragment} from 'react';
import {MAX_RATING} from '../../const';

function ReviewForm(): JSX.Element {
  const arrayFields = new Array(MAX_RATING).fill(null).map((_, id) => id + 1).reverse();

  return (
    <div className="add-review">
      <form action="#" className="add-review__form">

        <div className="rating">
          <div className="rating__stars">
            {arrayFields.map((item) => (
              <Fragment key={`rating-${item}`}>
                <input className="rating__input" id={`star-${item}`} type="radio" name="rating" value={item} />
                <label className="rating__label" htmlFor={`star-${item}`}>Rating {item}</label>
              </Fragment>
            ))}
          </div>
        </div>

        <div className="add-review__text" style={{backgroundColor: 'rgba(255,255,255,.3)'}}>
          <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"></textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ReviewForm;
