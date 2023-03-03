import { useQuery } from '@apollo/client';
import { useMemo } from 'react';
import { GET_DEPARTMENTS } from '../../api';

export const useGetEmployeeDefaultValues = () => {
  const { data: departments, loading: isDepartmentsLoading } = useQuery(GET_DEPARTMENTS);
  const { data: positions, loading: isPositionsLoading } = useQuery(GET_DEPARTMENTS);

  const loading = useMemo(() => isDepartmentsLoading || isPositionsLoading, [isDepartmentsLoading, isPositionsLoading]);
  const mappedDepartments = useMemo(() => {
    if (departments) {
      return departments.map(({ id, department_name }: { id: string; department_name: string }) => ({
        value: id,
        label: department_name,
      }));
    }

    return [];
  }, [departments]);
  const mappedPositions = useMemo(() => {
    if (positions) {
      return positions.map(({ id, position_name }: { id: string; position_name: string }) => ({
        value: id,
        label: position_name,
      }));
    }

    return [];
  }, [positions]);

  return {
    loading,
    departments: mappedDepartments,
    positions: mappedPositions,
  };
};
