import { createBrowserRouter } from 'react-router-dom';

import { routes } from './routes';
import { authRoutes } from '.';
import { Root } from '../components';
import { commonRoutes } from './common-routes';

export const router = createBrowserRouter([
  {
    path: routes.root,
    element: <Root />,
    children: [...authRoutes, ...commonRoutes],
  },
]);
