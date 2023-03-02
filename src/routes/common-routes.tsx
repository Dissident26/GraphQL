import { RouteObject } from 'react-router-dom';

import { routes } from './routes';
import { EmployeesSection, Employee } from '../components';

export const commonRoutes: RouteObject[] = [
  {
    path: routes.employees,
    element: <EmployeesSection />,
  },
  {
    path: routes.employee,
    element: <Employee />,
  },
];
