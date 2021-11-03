import React, {useState} from 'react';
import FilmCardNav from '../film-card-nav/film-card-nav';
import FilmReviews from '../film-reviews/film-reviews';
import {Film} from '../../types/film';
import FilmOverview from '../film-overview/film-overview';
import FilmDetails from '../film-details/film-details';
import {Comment} from '../../types/comment';

type FilmCardDescProps = {
  film: Film;
  comments: Comment[];
}

function FilmCardDesc({film, comments}: FilmCardDescProps): JSX.Element {
  const [navItem, setNavItem] = useState('Overview');

  return (
    <div className="film-card__desc">
      <FilmCardNav navItem={navItem} setNavItem={setNavItem} />

      {navItem === 'Overview' && <FilmOverview film={film} />}
      {navItem === 'Details' && <FilmDetails film={film} />}
      {navItem === 'Reviews' && <FilmReviews comments={comments} />}
    </div>
  );
}

export default FilmCardDesc;
