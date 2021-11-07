import React from 'react';

type FilmCardBgProps = {
  backgroundImage: string;
  name: string;
}

function FilmCardBg({backgroundImage, name}: FilmCardBgProps): JSX.Element {
  return (
    <div className="film-card__bg">
      <img src={backgroundImage} alt={name} />
    </div>
  );
}

export default FilmCardBg;
