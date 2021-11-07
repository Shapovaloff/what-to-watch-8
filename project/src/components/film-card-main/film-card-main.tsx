import Logo from '../logo/logo';
import React from 'react';
import {Film} from '../../types/film';
import UserBlock from '../user-block/user-block';
import FilmCardBg from '../film-card-bg/film-card-bg';
import FilmCardButtons from '../film-card-buttons/film-card-buttons';

type FilmCardMainProps = {
  film: Film;
}

function FilmCardMain({film}: FilmCardMainProps): JSX.Element {
  const {backgroundImage, posterImage, name, genre, released, id, isFavorite} = film;

  return (
    <section className="film-card">
      <FilmCardBg backgroundImage={backgroundImage} name={name} />

      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header film-card__head">
        <Logo />
        <UserBlock />
      </header>

      <div className="film-card__wrap">
        <div className="film-card__info">
          <div className="film-card__poster">
            <img src={posterImage} alt={`${name} poster`} width="218" height="327"/>
          </div>

          <div className="film-card__desc">
            <h2 className="film-card__title">{name}</h2>
            <p className="film-card__meta">
              <span className="film-card__genre">{genre}</span>
              <span className="film-card__year">{released}</span>
            </p>

            <FilmCardButtons isFavorite={isFavorite} id={id} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FilmCardMain;
