import Logo from '../../logo/logo';
import React from 'react';
import Footer from '../../footer/footer';
import UserBlock from '../../user-block/user-block';
import {Film} from '../../../types/film';
import SmallFilmCard from '../../small-film-card/small-film-card';

type MyListPageProps = {
  films: Film[];
}

function MyListPage({films}: MyListPageProps): JSX.Element {
  const filmFavorites = films.slice().filter((film: Film) => film.isFavorite);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />
        <h1 className="page-title user-page__title">My list</h1>
        <UserBlock />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">
          {filmFavorites.map((film) => (
            <SmallFilmCard key={film.id} film={film} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default MyListPage;
