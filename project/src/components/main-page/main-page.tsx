import React from 'react';
import Logo from '../logo/logo';
import {Film} from '../../types/film';
import CatalogFilmsList from '../catalog-films-list/catalog-films-list';
import CatalogGenresList from '../catalog-genres-list/catalog-genres-list';
import FilmCardMain from '../film-card-main/film-card-main';
import CatalogMoreButton from '../catalog-more-button/catalog-more-button';

type MainPageProps = {
  films: Film[];
}

function MainPage({films}: MainPageProps): JSX.Element {
  const promoFilm = films[1];

  return (
    <>
      <FilmCardMain film={promoFilm} />

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <CatalogGenresList />
          <CatalogFilmsList films={films} />
          <CatalogMoreButton />
        </section>

        <footer className="page-footer">
          <Logo team="light" />

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default MainPage;
