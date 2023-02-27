import { createBrowserRouter } from 'react-router-dom';

import { routes } from './routes';
import { authRoutes } from '.';
import { Root } from '../components';

export const router = createBrowserRouter([
  {
    path: routes.root,
    element: <Root />,
    children: [...authRoutes],
  },
]);
