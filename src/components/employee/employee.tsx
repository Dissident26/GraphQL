import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { UserAvatar } from '..';

import { GET_USER, IGetUserResponse } from '../../api';
import { Spinner } from '../spinner';
import { EmployeeForm } from './employee-form';

export const Employee = () => {
  const { id } = useParams();
  const { data, loading } = useQuery<IGetUserResponse>(GET_USER, { variables: { id } });
  // add queries

  if (loading) {
    return <Spinner />;
  }
  console.log(data?.user);

  return (
    <div>
      <div>
        <UserAvatar profile={data?.user.profile} size="80px" />
      </div>
      <EmployeeForm />
    </div>
  );
};
