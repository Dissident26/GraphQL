import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { UserAvatar, Table } from '../..';
import { IUser } from '../../../api';

import styles from './styles.module.scss';

interface IEmployeesTable {
  employees: IUser[];
}

export const EmployeesTable = ({ employees }: IEmployeesTable) => {
  const tableColumns = ['', 'First Name', 'Last Name', 'Email', 'Departament', 'Position', ''];
  const mappedTableRows = useMemo(
    () =>
      employees?.map(({ id, email, profile, department_name, position_name }) => [
        <UserAvatar key={email} profile={profile} size="40px" />,
        profile.first_name,
        profile.last_name,
        email,
        department_name,
        position_name,
        <Link key={email} to={`${id}`}>
          Link
        </Link>,
      ]),
    [employees]
  );

  return <Table className={styles.table} colunms={tableColumns} rows={mappedTableRows} />;
};
