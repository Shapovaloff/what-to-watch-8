import MainScreen from '../main-screen/main-screen';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import MyListscreen from '../my-list-screen/my-list-screen';
import LoginScreen from '../login-screen/login-screen';
import FilmScreen from '../film-screen/film-screen';
import ReviewScreen from '../review-screen/review-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';

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
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Root}>
          <MainScreen mainFilmCard={mainFilmCard} />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.MyList}
          render={() => <MyListscreen />}
          authorizationStatus={AuthorizationStatus.NoAuth}
        />
        <Route exact path={AppRoute.Login}>
          <LoginScreen />
        </Route>
        <Route exact path={AppRoute.Film}>
          <FilmScreen />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.Review}
          render={() => <ReviewScreen />}
          authorizationStatus={AuthorizationStatus.NoAuth}
        />
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
