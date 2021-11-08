import React, {useEffect, useRef, useState} from 'react';
import {Film} from '../../types/film';
import {Link, useHistory} from 'react-router-dom';
import {HOVER_DELAY} from '../../const';
import SmallFilmCardVideo from '../small-film-card-video/small-film-card-video';

type SmallFilmCardProps = {
  film: Film;
}

function SmallFilmCard({film}: SmallFilmCardProps): JSX.Element {
  const timer = useRef<NodeJS.Timeout | null>(null);
  const [isHovered, setHovered] = useState(false);
  const [isDelayedHovered, setDelayedHovered] = useState(false);
  const idFilm: number = film.id;
  const history = useHistory();

  const clearTimer = () => {
    if (timer.current) {
      clearTimeout(timer.current);
      timer.current = null;
    }
  };

  useEffect(() => {
    clearTimer();

    if (!isHovered) {
      if (isDelayedHovered) {
        setDelayedHovered(false);
      }

      return;
    }

    timer.current = setTimeout(() => {
      if (!isHovered) {
        if (isDelayedHovered) {
          setDelayedHovered(false);
        }

        return;
      }

      setDelayedHovered(true);
    }, HOVER_DELAY);

    return clearTimer;
  }, [isHovered, isDelayedHovered]);

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => history.push(`/film/${idFilm}/`)}
    >
      <SmallFilmCardVideo
        src={film.previewVideoLink}
        isPlay={isDelayedHovered}
        poster={film.previewImage}
      />
      <h3 className="small-film-card__title">
        <Link to={`/film/${idFilm}/`} className="small-film-card__link" >{film.name}</Link>
      </h3>
    </article>
  );
}

export default SmallFilmCard;
