import Logo from '../logo/logo';
import React from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

function NotFoundPage(): JSX.Element {
  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>
        <header className="page-header film-card__head">
          <Logo />

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
              </div>
            </li>
            <li className="user-block__item">
              <a className="user-block__link">Sign out</a>
            </li>
          </ul>
        </header>

        <div className="film-card__wrap">
          <h1>This page does not exist</h1>
          <p>
            <Link style={{color: 'white'}} to={AppRoute.Root}>Go to main page</Link>
          </p>
        </div>
      </section>

      <div className="page-content">
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

export default NotFoundPage;
