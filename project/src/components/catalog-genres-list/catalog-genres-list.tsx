import React, {Dispatch, SyntheticEvent} from 'react';
import {Genres} from '../../const';
import {Actions} from '../../types/action';
import {changeFilter} from '../../store/action';
import {connect, ConnectedProps} from 'react-redux';
import {State} from '../../types/state';

const mapStateToProps = ({activeGenre}: State) => ({
  activeGenre,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onChangeFilter(genre: string) {
    dispatch(changeFilter(genre));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function CatalogGenresList({activeGenre, onChangeFilter}: PropsFromRedux): JSX.Element {
  const genres = Object.values(Genres);

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
