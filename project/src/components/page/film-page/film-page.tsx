import Logo from '../../logo/logo';
import React from 'react';
import Footer from '../../footer/footer';
import {useParams} from 'react-router-dom';
import {getFilm, getSimilarFilms} from '../../../utils';
import CatalogFilmsList from '../../catalog-films-list/catalog-films-list';
import FilmCardDesc from '../../film-card-desc/film-card-desc';
import {Params} from '../../../types/types';
import UserBlock from '../../user-block/user-block';
import FilmCardBg from '../../film-card-bg/film-card-bg';
import FilmCardButtons from '../../film-card-buttons/film-card-buttons';
import FilmCardPoster from '../../film-card-poster/film-card-poster';
import {State} from '../../../types/state';
import {connect, ConnectedProps} from 'react-redux';

const mapStateToProps = ({films, comments}: State) => ({
  films, comments,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function FilmPage({films, comments}: PropsFromRedux): JSX.Element {
  const {id} = useParams() as Params;
  const film = getFilm(films, Number(id));
  const filmsSimilar = getSimilarFilms(films, film, Number(id));

  const {
    posterImage, name, backgroundImage,
    genre, released, backgroundColor,
    isFavorite,
  } = film;

  return (
    <>
      <section className="film-card film-card--full" style={{backgroundColor: backgroundColor}}>
        <div className="film-card__hero">
          <FilmCardBg backgroundImage={backgroundImage} name={name} />
          <h1 className="visually-hidden">WTW</h1>
          <header className="page-header film-card__head">
            <Logo />
            <UserBlock />
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre}</span>
                <span className="film-card__year">{released}</span>
              </p>

              <FilmCardButtons isFavorite={isFavorite} isAddReview id={id} />
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <FilmCardPoster posterImage={posterImage} name={name} posterSize={'big'} />
            <FilmCardDesc film={film} comments={comments} />
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <CatalogFilmsList films={filmsSimilar} />
        </section>

        <Footer />
      </div>
    </>
  );
}

export {FilmPage};
export default connector(FilmPage);
