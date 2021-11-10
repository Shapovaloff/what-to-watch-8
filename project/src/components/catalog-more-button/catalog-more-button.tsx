import React from 'react';

type CatalogMoreButtonProps = {
  addCardFilm: () => void;
}

function CatalogMoreButton({addCardFilm}: CatalogMoreButtonProps): JSX.Element {
  return (
    <div className="catalog__more">
      <button className="catalog__button" onClick={addCardFilm} type="button">Show more</button>
    </div>
  );
}

export default CatalogMoreButton;
