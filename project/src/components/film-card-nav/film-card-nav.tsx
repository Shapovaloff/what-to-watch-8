import React, {SyntheticEvent} from 'react';
import {cardNav} from '../../const';

type FilmCardNavProps = {
  navItemDesc: string;
  changeDescNav: (navItem: string) => void;
}

function FilmCardNav({navItemDesc, changeDescNav}: FilmCardNavProps): JSX.Element {
  return (
    <nav className="film-nav film-card__nav">
      <ul className="film-nav__list">
        {cardNav.map((item) => (
          <li key={item} className={`film-nav__item ${navItemDesc === item && 'film-nav__item--active'}`}>
            <span
              onClick={(evt: SyntheticEvent<HTMLElement>) => {
                evt.preventDefault();
                changeDescNav(item);
              }}
              className="film-nav__link"
            >
              {item}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default FilmCardNav;
