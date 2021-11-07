import React from 'react';

type FilmCardPosterProps = {
  posterImage: string;
  posterSize?: string;
  name: string;
}

function FilmCardPoster({posterImage, name, posterSize = 'small'}: FilmCardPosterProps): JSX.Element {
  return (
    <div className={`film-card__poster film-card__poster--${posterSize}`}>
      <img src={posterImage} alt={name} width="218" height="327" />
    </div>
  );
}

export default FilmCardPoster;
