import React, {SyntheticEvent, useState} from 'react';
import {Genres} from '../../const';

function CatalogGenresList(): JSX.Element {
  const [activeGenre, setActiveGenre] = useState(Genres[0]);

  const clickHandler = (evt: SyntheticEvent<HTMLElement>, genre: string) => {
    evt.preventDefault();
    setActiveGenre(genre);
  };

  return (
    <ul className="catalog__genres-list">
      {Genres.map((genre) => (
        <li key={genre} className={`catalog__genres-item ${genre === activeGenre && 'catalog__genres-item--active'}`}>
          <a
            href="#"
            className="catalog__genres-link"
            onClick={(evt: SyntheticEvent<HTMLElement>) => {
              clickHandler(evt, genre);
            }}
          >
            {genre}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default CatalogGenresList;
