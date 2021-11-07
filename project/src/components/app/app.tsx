import MainPage from '../main-page/main-page';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import MyListPage from '../my-list-page/my-list-page';
import LoginPage from '../login-page/login-page';
import FilmPage from '../film-page/film-page';
import ReviewPage from '../review-page/review-page';
import NotFoundPage from '../not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';
import {Film} from '../../types/film';
import {Comment} from '../../types/comment';
import PlayerPage from '../player-page/player-page';

type AppProps = {
  films: Film[];
  comments: Comment[];
}

function App({films, comments}: AppProps): JSX.Element {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Root}>
          <MainPage films={films} />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.MyList}
          render={() => <MyListPage films={films} />}
          authorizationStatus={AuthorizationStatus.Auth}
        />
        <Route exact path={AppRoute.Login}>
          <LoginPage />
        </Route>
        <Route exact path={AppRoute.Film}>
          <FilmPage films={films} comments={comments}/>
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.Review}
          render={() => <ReviewPage />}
          authorizationStatus={AuthorizationStatus.NoAuth}
        />
        <Route exact path={AppRoute.Player}>
          <PlayerPage films={films} />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
