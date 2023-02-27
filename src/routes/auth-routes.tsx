import { RouteObject } from 'react-router-dom';

import { routes } from './routes';
import { LogIn, SignUp } from '../components';

export const authRoutes: RouteObject[] = [
  {
    path: routes.auth.signUp,
    element: <SignUp />,
  },
  {
    path: routes.auth.logIn,
    element: <LogIn />,
  },
];
