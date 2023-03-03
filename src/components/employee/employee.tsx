import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { UserAvatar } from '..';

import { GET_USER, IGetUserInfoResponse } from '../../api';
import { Spinner } from '../spinner';
import { EmployeeForm } from './employee-form';

export const Employee = () => {
  const { id } = useParams();
  const { data, loading } = useQuery<IGetUserInfoResponse>(GET_USER, { variables: { id } });

  if (loading) {
    return <Spinner />;
  }

  return (
    <div>
      <div>
        <UserAvatar profile={data?.user?.profile} size="80px" />
      </div>
      <EmployeeForm defaultValues={data} />
    </div>
  );
};
