import Logo from '../../logo/logo';
import React from 'react';
import Footer from '../../footer/footer';
import UserBlock from '../../user-block/user-block';
import CatalogFilmsList from '../../catalog-films-list/catalog-films-list';
import {State} from '../../../types/state';
import {connect, ConnectedProps} from 'react-redux';

const mapStateToProps = ({films}: State) => ({
  films,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function MyListPage({films}: PropsFromRedux): JSX.Element {
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

export {MyListPage};
export default connector(MyListPage);
