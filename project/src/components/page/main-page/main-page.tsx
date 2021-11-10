import React, {useEffect, useState} from 'react';
import CatalogFilmsList from '../../catalog-films-list/catalog-films-list';
import CatalogGenresList from '../../catalog-genres-list/catalog-genres-list';
import FilmCardMain from '../../film-card-main/film-card-main';
import CatalogMoreButton from '../../catalog-more-button/catalog-more-button';
import Footer from '../../footer/footer';
import {State} from '../../../types/state';
import {connect, ConnectedProps} from 'react-redux';
import {CATALOG_INITIAL_PAGE, CATALOG_PAGE_SIZE} from '../../../const';
import {filterFilmsGenre} from '../../../utils';

const mapStateToProps = ({films, activeGenre}: State) => ({
  films, activeGenre,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function MainPage({films, activeGenre}: PropsFromRedux): JSX.Element {
  const promoFilm = films[1];
  const [currentPage, setCurrentPage] = useState(CATALOG_INITIAL_PAGE);
  const filterFilms = filterFilmsGenre(films, activeGenre);
  const catalogFilms = filterFilms.slice(0, currentPage * CATALOG_PAGE_SIZE);
  const isButton = filterFilms.length > catalogFilms.length;

  const handleMoreButtonClick = () => {
    setCurrentPage((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    setCurrentPage(CATALOG_INITIAL_PAGE);
  }, [filterFilms]);

  return (
    <>
      <FilmCardMain film={promoFilm} />
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <CatalogGenresList />
          <CatalogFilmsList films={catalogFilms} />

          {isButton && <CatalogMoreButton addCardFilm={handleMoreButtonClick} />}
        </section>

        <Footer />
      </div>
    </>
  );
}

export {MainPage};
export default connector(MainPage);
