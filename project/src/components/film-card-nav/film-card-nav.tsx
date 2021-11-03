import React, {SyntheticEvent} from 'react';
import {cardNav} from '../../const';

type FilmCardNavProps = {
  navItem: string;
  setNavItem: any;
}

function FilmCardNav({navItem, setNavItem}: FilmCardNavProps): JSX.Element {
  return (
    <nav className="film-nav film-card__nav">
      <ul className="film-nav__list">
        {cardNav.map((item) => (
          <li key={item} className={`film-nav__item ${navItem === item && 'film-nav__item--active'}`}>
            <a
              href="#"
              onClick={(evt: SyntheticEvent<HTMLElement>) => {
                evt.preventDefault();
                setNavItem(item);
              }}
              className="film-nav__link"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default FilmCardNav;
