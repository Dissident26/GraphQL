import { useCallback } from 'react';
import { useLazyQuery } from '@apollo/client';

import { Form, Input, PasswordInput, RequestError, Spinner, SubmitButton } from '../..';
import { LOG_IN_QUERY, userVar } from '../../../api';
import { LOCAL_STORAGE_TOKEN_KEY } from '../../../constants';

import styles from './styles.module.scss';

const LOGIN_INPUT_NAME = 'login';
const PASSWORD_INPUT_NAME = 'password';

export const LogInForm = () => {
  const [logIn, { loading, error }] = useLazyQuery(LOG_IN_QUERY);

  const onSubmit = useCallback(
    async ({ login, password }: any) => {
      const { data } = await logIn({ variables: { login, password } });

      localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, data?.login?.access_token);
      userVar(data?.login?.user);
    },
    [logIn]
  );

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
