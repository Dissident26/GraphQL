import { useQuery } from '@apollo/client';
import { GET_USERS_QUERY, IGetUsersResponse } from '../../api';
import { Spinner } from '../spinner';
import { EmployeesTable } from './components';

export const EmployeesSection = () => {
  const { data, loading } = useQuery<IGetUsersResponse>(GET_USERS_QUERY);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div>
      <EmployeesTable employees={data?.users} />
    </div>
  );
};
