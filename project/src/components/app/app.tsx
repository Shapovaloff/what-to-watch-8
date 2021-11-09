import MainPage from '../page/main-page/main-page';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import MyListPage from '../page/my-list-page/my-list-page';
import LoginPage from '../page/login-page/login-page';
import FilmPage from '../page/film-page/film-page';
import ReviewPage from '../page/review-page/review-page';
import NotFoundPage from '../page/not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';
import PlayerPage from '../page/player-page/player-page';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Root}>
          <MainPage />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.MyList}
          render={() => <MyListPage />}
          authorizationStatus={AuthorizationStatus.Auth}
        />
        <Route exact path={AppRoute.Login}>
          <LoginPage />
        </Route>
        <Route exact path={AppRoute.Film}>
          <FilmPage />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.Review}
          render={() => <ReviewPage />}
          authorizationStatus={AuthorizationStatus.Auth}
        />
        <Route exact path={AppRoute.Player}>
          <PlayerPage />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
