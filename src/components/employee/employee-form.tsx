import { useCallback, useMemo } from 'react';
import { Form, Input, ISelectOption, Select, SubmitButton } from '..';
import { IDepartment, IPosition, IUser } from '../../api';
import styles from './styles.module.scss';

interface IDefaultFormValues {
  user: IUser;
  departments: IPosition[];
  positions: IDepartment[];
}

interface IEmployeeForm {
  defaultValues?: IDefaultFormValues;
}

const FIRST_NAME_INPUT_NAME = 'first_name';
const LAST_NAME_INPUT_NAME = 'last_name';
const DEPARTMENT_INPUT_NAME = 'department_name';
const POSITION_INPUT_NAME = 'position_name';

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

  const defaultFormValues = useMemo(
    () => ({
      [FIRST_NAME_INPUT_NAME]: user.profile.first_name,
      [LAST_NAME_INPUT_NAME]: user.profile.last_name,
      [DEPARTMENT_INPUT_NAME]: user.department.id,
      [POSITION_INPUT_NAME]: user.position.id,
    }),
    [user]
  );

  const onSubmit = useCallback(async (data: any) => {
    console.log(data);
  }, []);

  return (
    <div className={styles.formContainer}>
      <Form onSubmit={onSubmit} defaultValues={defaultFormValues}>
        <Input name={FIRST_NAME_INPUT_NAME} required label="First Name" />
        <Input name={LAST_NAME_INPUT_NAME} required label="Last Name" />
        <Select name={DEPARTMENT_INPUT_NAME} options={departmentsOption} label="Department" />
        <Select name={POSITION_INPUT_NAME} options={positionsOptions} label="Position" />
        <SubmitButton />
      </Form>
      {/* <RequestError error={error} /> */}
    </div>
  );
};
