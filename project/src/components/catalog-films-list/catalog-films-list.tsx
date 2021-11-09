import SmallFilmCard from '../small-film-card/small-film-card';
import {Film} from '../../types/film';
import {State} from '../../types/state';
import {connect, ConnectedProps} from 'react-redux';
import {filterFilmsGenre} from '../../utils';

type CatalogFilmsListProps = {
  films: Film[];
};

const mapStateToProps = ({activeGenre}: State) => ({
  activeGenre,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & CatalogFilmsListProps;

function CatalogFilmsList({films, activeGenre}: ConnectedComponentProps): JSX.Element {
  const filterFilms = filterFilmsGenre(films, activeGenre);

  return (
    <div className="catalog__films-list">
      {filterFilms.map((film) => (
        <SmallFilmCard key={film.id} film={film} />
      ))}
    </div>
  );
}

export {CatalogFilmsList};
export default connector(CatalogFilmsList);
