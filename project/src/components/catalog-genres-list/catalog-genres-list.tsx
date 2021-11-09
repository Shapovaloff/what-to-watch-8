import React, {Dispatch, SyntheticEvent} from 'react';
import {Actions} from '../../types/action';
import {changeFilter} from '../../store/action';
import {connect, ConnectedProps} from 'react-redux';
import {State} from '../../types/state';
import {getGenreFilms} from '../../utils';

const mapStateToProps = ({activeGenre, films}: State) => ({
  activeGenre, films,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onChangeFilter(genre: string) {
    dispatch(changeFilter(genre));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function CatalogGenresList({activeGenre, films, onChangeFilter}: PropsFromRedux): JSX.Element {
  const genres = getGenreFilms(films);

  const clickHandler = (evt: SyntheticEvent<HTMLElement>, genre: string) => {
    evt.preventDefault();
    onChangeFilter(genre);
  };

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => (
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

export {CatalogGenresList};
export default connector(CatalogGenresList);
