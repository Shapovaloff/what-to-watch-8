import MainScreen from '../main-screen/main-screen';

type MainFilmCard = {
  title: string;
  genre: string;
  year: number;
};


type AppProps = {
  mainFilmCard: MainFilmCard;
}

function App({mainFilmCard}: AppProps): JSX.Element {
  return (
    <MainScreen mainFilmCard={mainFilmCard} />
  );
}

export default App;
