import Logo from '../../logo/logo';
import React from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../../const';
import Footer from '../../footer/footer';
import UserBlock from '../../user-block/user-block';

function NotFoundPage(): JSX.Element {
  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>
        <header className="page-header film-card__head">
          <Logo />
          <UserBlock />
        </header>

        <div className="film-card__wrap">
          <h1>This page does not exist</h1>
          <p>
            <Link style={{color: 'white'}} to={AppRoute.Root}>Go to main page</Link>
          </p>
        </div>
      </section>

      <div className="page-content">
        <Footer />
      </div>
    </>
  );
}

export default NotFoundPage;
