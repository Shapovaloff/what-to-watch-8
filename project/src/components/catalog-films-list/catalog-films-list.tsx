import SmallFilmCard from '../small-film-card/small-film-card';
import {Film} from '../../types/film';

type CatalogFilmsListProps = {
  films: Film[];
};

function CatalogFilmsList({films}: CatalogFilmsListProps): JSX.Element {
  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <SmallFilmCard key={film.id} film={film} />
      ))}
    </div>
  );
}

export default CatalogFilmsList;
