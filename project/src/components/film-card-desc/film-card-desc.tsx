import React, {Dispatch} from 'react';
import FilmCardNav from '../film-card-nav/film-card-nav';
import FilmReviews from '../film-reviews/film-reviews';
import {Film} from '../../types/film';
import FilmOverview from '../film-overview/film-overview';
import FilmDetails from '../film-details/film-details';
import {CardDescrNav} from '../../const';
import {State} from '../../types/state';
import {connect, ConnectedProps} from 'react-redux';
import {Actions} from '../../types/action';
import {changeNavDesc} from '../../store/action';

type FilmCardDescProps = {
  film: Film;
}

const mapStateToProps = ({navItemDesc, comments}: State) => ({
  navItemDesc, comments,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  changeDescNav(navItem: string) {
    dispatch(changeNavDesc(navItem));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & FilmCardDescProps;

function FilmCardDesc({film, comments, navItemDesc, changeDescNav}: ConnectedComponentProps): JSX.Element {
  return (
    <div className="film-card__desc">
      <FilmCardNav navItemDesc={navItemDesc} changeDescNav={changeDescNav} />

      {navItemDesc === CardDescrNav.Overview && <FilmOverview film={film} />}
      {navItemDesc === CardDescrNav.Details && <FilmDetails film={film} />}
      {navItemDesc === CardDescrNav.Reviews && <FilmReviews comments={comments} />}
    </div>
  );
}

export {FilmCardDesc};
export default connector(FilmCardDesc);
