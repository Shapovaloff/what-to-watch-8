import {AppRoute, AuthorizationStatus} from '../../const';
import {Redirect, Route, RouteProps} from 'react-router-dom';

type PrivateRoute = RouteProps & {
  render: () => JSX.Element;
  authorizationStatus: AuthorizationStatus;
}

function PrivateRoute(props: PrivateRoute): JSX.Element {
  const {exact, path, render, authorizationStatus} = props;
  return (
    <Route
      exact={exact}
      path={path}
      render={() => (
        authorizationStatus === AuthorizationStatus.Auth
          ? render()
          : <Redirect to={AppRoute.Login} />
      )}
    />
  );
}

export default PrivateRoute;
