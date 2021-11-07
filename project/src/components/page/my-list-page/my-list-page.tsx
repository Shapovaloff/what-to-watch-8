import Logo from '../../logo/logo';
import React from 'react';
import Footer from '../../footer/footer';
import UserBlock from '../../user-block/user-block';
import {Film} from '../../../types/film';
import CatalogFilmsList from '../../catalog-films-list/catalog-films-list';

type MyListPageProps = {
  films: Film[];
}

function MyListPage({films}: MyListPageProps): JSX.Element {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />
        <h1 className="page-title user-page__title">My list</h1>
        <UserBlock />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <CatalogFilmsList films={films} />
      </section>

      <Footer />
    </div>
  );
}

export default MyListPage;
