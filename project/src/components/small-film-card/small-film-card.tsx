import React from 'react';
import {Film} from '../../types/film';
import {Link} from  'react-router-dom';

type SmallFilmCardProps = {
  film: Film;
}

function SmallFilmCard({film}: SmallFilmCardProps): JSX.Element {
  const idFilm: number = film.id;

  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={film.previewImage} alt={film.description} width="280" height="175"/>
      </div>
      <h3 className="small-film-card__title">
        <Link to={`/film/${idFilm}/`} className="small-film-card__link" >{film.name}</Link>
      </h3>
    </article>
  );
}

export default SmallFilmCard;
