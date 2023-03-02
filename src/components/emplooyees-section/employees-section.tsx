import { useQuery } from '@apollo/client';
import { IUser, GET_USERS_QUERY } from '../../api';
import { Spinner } from '../spinner';
import { EmployeesTable } from './components';

interface IGetUsersResponse {
  users: IUser[];
}

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