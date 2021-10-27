import MainPage from '../main-page/main-page';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import MyListPage from '../my-list-page/my-list-page';
import LoginPage from '../login-page/login-page';
import FilmPage from '../film-page/film-page';
import ReviewPage from '../review-page/review-page';
import NotFoundPage from '../not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';
import {MainPageProps} from '../../types/types';

function App({mainFilmCard}: MainPageProps): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Root}>
          <MainPage mainFilmCard={mainFilmCard} />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.MyList}
          render={() => <MyListPage />}
          authorizationStatus={AuthorizationStatus.NoAuth}
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
          authorizationStatus={AuthorizationStatus.NoAuth}
        />
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
