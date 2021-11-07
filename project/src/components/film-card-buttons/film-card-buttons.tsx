import React from 'react';
import {Link, useHistory} from 'react-router-dom';

type FilmCardButtonsProps = {
  id: string | number;
  isFavorite: boolean;
  isAddReview?: boolean;
}

function FilmCardButtons({id, isFavorite, isAddReview}: FilmCardButtonsProps): JSX.Element {
  const history = useHistory();

  const handleButtonClick = () => {
    history.push(`/player/${id}`);
  };

  return (
    <div className="film-card__buttons">
      <button className="btn btn--play film-card__button" type="button" onClick={handleButtonClick}>
        <svg viewBox="0 0 19 19" width="19" height="19">
          <use xlinkHref="#play-s"></use>
        </svg>
        <span>Play</span>
      </button>
      <button className="btn btn--list film-card__button" type="button">
        <svg viewBox="0 0 19 20" width="19" height="20">
          <use xlinkHref={isFavorite ? '#in-list' : '#add'}></use>
        </svg>
        <span>My list</span>
      </button>
      {isAddReview && <Link to={`/film/${id}/review`} className="btn film-card__button">Add review</Link>}
    </div>
  );
}

export default FilmCardButtons;
