import { RouteObject } from 'react-router-dom';

import { routes } from './routes';
import { EmployeesSection } from '../components';

export const commonRoutes: RouteObject[] = [
  {
    path: routes.employees,
    element: <EmployeesSection />,
  },
];
