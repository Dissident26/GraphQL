import { useQuery } from '@apollo/client';
import { useMemo } from 'react';
import { GET_DEPARTMENTS } from '../../api';

export const useGetEmployeeDefaultValues = () => {
  const { data: departments, loading: isDepartmentsLoading } = useQuery(GET_DEPARTMENTS);
  const { data: positions, loading: isPositionsLoading } = useQuery(GET_DEPARTMENTS);

  const loading = useMemo(() => isDepartmentsLoading || isPositionsLoading, [isDepartmentsLoading, isPositionsLoading]);
  const mappedDepartments = useMemo(
    () => departments.map(({ id, department_name }) => ({ value: id, label: department_name })),
    [departments]
  );
  const mappedPositions = useMemo(
    () => departments.map(({ id, position_name }) => ({ value: id, label: position_name })),
    [positions]
  );

  return {
    loading,
    departments: mappedDepartments,
    positions: mappedPositions,
  };
};
