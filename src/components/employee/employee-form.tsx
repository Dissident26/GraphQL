import { useMutation } from '@apollo/client';
import { useCallback, useMemo } from 'react';

import { Form, Input, ISelectOption, RequestError, Select, SubmitButton } from '..';
import { IDepartment, IPosition, IUser, UPDATE_USER_MUTATION } from '../../api';

import styles from './styles.module.scss';

interface IDefaultFormValues {
  user: IUser;
  departments: IPosition[];
  positions: IDepartment[];
}

interface IEmployeeForm {
  defaultValues?: IDefaultFormValues;
}

interface IFormSubmitValues {
  first_name: string;
  last_name: string;
  departmentId: string;
  positionId: string;
}

const FIRST_NAME_INPUT_NAME = 'first_name';
const LAST_NAME_INPUT_NAME = 'last_name';
const DEPARTMENT_INPUT_NAME = 'departmentId';
const POSITION_INPUT_NAME = 'positionId';

export const EmployeeForm = ({ defaultValues: { user, departments, positions } }: IEmployeeForm) => {
  const { positionsOptions, departmentsOption } = useMemo(() => {
    const mapToOptions = ({ id, name }: IPosition | IDepartment): ISelectOption => ({
      value: id,
      label: name,
    });

    return {
      positionsOptions: positions?.map(mapToOptions),
      departmentsOption: departments?.map(mapToOptions),
    };
  }, [positions, departments]);

  const [submit, { data, loading, error }] = useMutation(UPDATE_USER_MUTATION);

  const defaultFormValues = useMemo(
    () => ({
      [FIRST_NAME_INPUT_NAME]: user.profile.first_name,
      [LAST_NAME_INPUT_NAME]: user.profile.last_name,
      [DEPARTMENT_INPUT_NAME]: user.department.id,
      [POSITION_INPUT_NAME]: user.position.id,
    }),
    [user]
  );

  const onSubmit = useCallback(async ({first_name,
    last_name,
    departmentId,
    positionId,}: IFormSubmitValues) => {
    await submit({variables: {
      id: user.id, user: {
        profile: {
          first_name,
          last_name,
        },
        departmentId,
        positionId
      }
    }})
  }, [submit]);

  return (
    <>
      <Form onSubmit={onSubmit} defaultValues={defaultFormValues} className={styles.form}>
        <Input name={FIRST_NAME_INPUT_NAME} required label="First Name" />
        <Input name={LAST_NAME_INPUT_NAME} required label="Last Name" />
        <Select name={DEPARTMENT_INPUT_NAME} options={departmentsOption} label="Department" />
        <Select name={POSITION_INPUT_NAME} options={positionsOptions} label="Position" />
        <SubmitButton isLoading={loading}/>
      </Form>
      <RequestError error={error} />
    </>
  );
};
