import { useCallback } from 'react';
import { useLazyQuery } from '@apollo/client';

import { Form, Input, PasswordInput, RequestError, Spinner, SubmitButton } from '../..';
import { LOG_IN_QUERY, userVar } from '../../../api';

import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../../routes';
import { useLocalStorage } from '../../../hooks';
import { AuthInput } from '../types';

const LOGIN_INPUT_NAME = 'login';
const PASSWORD_INPUT_NAME = 'password';

export const LogInForm = () => {
  const [logIn, { loading, error }] = useLazyQuery(LOG_IN_QUERY);
  const { setToken } = useLocalStorage();
  const navigate = useNavigate();
  const onSubmit = useCallback(
    async ({ login, password }: AuthInput) => {
      const { data } = await logIn({ variables: { login, password } });

      setToken(data?.login?.access_token);
      userVar(data?.login?.user);
      navigate(routes.employees);
    },
    [logIn, navigate, setToken]
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
