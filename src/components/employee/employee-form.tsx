import { useCallback, useMemo } from 'react';
import { Form, Input, RequestError, Select, SubmitButton } from '..';
import { IUser } from '../../api';
import styles from './styles.module.scss';

interface IEmployeeForm {
  employee?: IUser;
}

const FIRST_NAME_INPUT_NAME = 'first_name';
const LAST_NAME_INPUT_NAME = 'last_name';
const DEPARTMENT_INPUT_NAME = 'department_name';
const POSITION_INPUT_NAME = 'position_name';

export const EmployeeForm = ({ employee }: IEmployeeForm) => {
  const onSubmit = useCallback(async (data: any) => {
    console.log('submit');
  }, []);

  const departmentOptions = useMemo(() => {
    return [{ value: '1', label: 'test' }];
  }, []);
  const positionOptions = useMemo(() => {
    return [{ value: '1', label: 'test' }];
  }, []);

  return (
    <div className={styles.formContainer}>
      <Form onSubmit={onSubmit}>
        <Input name={FIRST_NAME_INPUT_NAME} required label={'First Name'} />
        <Input name={LAST_NAME_INPUT_NAME} required label={'Last Name'} />
        <Select options={departmentOptions} />
        <Select options={positionOptions} />
        <SubmitButton />
      </Form>
      {/* <RequestError error={error} /> */}
    </div>
  );
};
