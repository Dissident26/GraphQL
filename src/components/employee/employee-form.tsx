import { useCallback, useMemo } from 'react';
import { Form, Input, Select, SubmitButton } from '..';
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
  const departmentsSelectOption = useMemo(() => {
    if (departments) {
      return departments?.map(({ id, name }: IDepartment) => ({
        value: id,
        label: name,
      }));
    }

    return [];
  }, [departments]);
  const positionsSelectOptions = useMemo(() => {
    if (positions) {
      return positions?.map(({ id, name }: IPosition) => ({
        value: id,
        label: name,
      }));
    }

    return [];
  }, [positions]);

  const onSubmit = useCallback(async (data: any) => {
    console.log('submit');
  }, []);

  return (
    <div className={styles.formContainer}>
      <Form onSubmit={onSubmit}>
        <Input name={FIRST_NAME_INPUT_NAME} required label={'First Name'} />
        <Input name={LAST_NAME_INPUT_NAME} required label={'Last Name'} />
        <Select name={DEPARTMENT_INPUT_NAME} options={departmentsSelectOption} />
        <Select name={POSITION_INPUT_NAME} options={positionsSelectOptions} />
        <SubmitButton />
      </Form>
      {/* <RequestError error={error} /> */}
    </div>
  );
};
