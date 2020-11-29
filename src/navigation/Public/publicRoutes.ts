import { ReactElement } from 'react';
import WelcomeScreen from '../../screens/Welcome';
import Login from '../../screens/Login';
import NewUser from '../../screens/NewUser';

export const PUBLIC_INITIAL_ROUTE_NAME = 'Welcome';

const routes = {
  Welcome: {
    component: WelcomeScreen,
    name: 'Welcome',
  },
  Login: {
    component: Login,
    name: 'Login',
  },
  NewUser: {
    component: NewUser,
    name: 'NewUser',
  },
};

export function getPublicRoutes(stackScreen): Array<ReactElement> {
  return Object.keys(routes).map((screen, index) =>
    stackScreen(routes[screen], index)
  );
}
