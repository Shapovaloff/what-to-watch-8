import Logo from '../../logo/logo';
import React from 'react';
import UserBlock from '../../user-block/user-block';
import {getFilm} from '../../../utils';
import {useParams} from 'react-router-dom';
import {Params} from '../../../types/types';
import Breadcrumbs from '../../breadcrumbs/breadcrumbs';
import ReviewForm from '../../review-form/review-form';
import FilmCardPoster from '../../film-card-poster/film-card-poster';
import {State} from '../../../types/state';
import {connect, ConnectedProps} from 'react-redux';

const mapStateToProps = ({films}: State) => ({
  films,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function ReviewPage({films}: PropsFromRedux): JSX.Element {
  const {id} = useParams() as Params;
  const film = getFilm(films, Number(id));
  const {
    backgroundImage, backgroundColor, name,
    posterImage,
  } = film;

  return (
    <section className="film-card film-card--full" style={{backgroundColor: backgroundColor}}>
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo />
          <Breadcrumbs id={id} name={name} />
          <UserBlock />
        </header>

        <FilmCardPoster posterImage={posterImage} name={name}/>
      </div>

      <ReviewForm />
    </section>
  );
}

export {ReviewPage};
export default connector(ReviewPage);
