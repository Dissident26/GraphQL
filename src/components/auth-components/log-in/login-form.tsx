import { useCallback } from 'react';
import { useLazyQuery } from '@apollo/client';

import { Form, Input, PasswordInput, RequestError, Spinner, SubmitButton } from '../..';
import { LOG_IN_QUERY } from '../../../api';

import styles from './styles.module.scss';

const LOGIN_INPUT_NAME = 'login';
const PASSWORD_INPUT_NAME = 'password';

export const LogInForm = () => {
  const [logIn, { data, loading, error }] = useLazyQuery(LOG_IN_QUERY);

  const onSubmit = useCallback(async ({ login, password }: any) => {
    await logIn({ variables: { login, password } });
    console.log('rerender');
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className={styles.formContainer}>
      <Form onSubmit={onSubmit}>
        <Input name={LOGIN_INPUT_NAME} required label={'Name'} />
        <PasswordInput name={PASSWORD_INPUT_NAME} required label={'Password'} />
        <SubmitButton />
      </Form>
      <RequestError error={error} />
    </div>
  );
};
