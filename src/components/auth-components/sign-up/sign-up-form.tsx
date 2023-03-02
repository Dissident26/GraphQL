import { useMutation } from '@apollo/client';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { Form, Input, PasswordInput, Spinner, SubmitButton } from '../../';
import { SIGN_IN_MUTATION, userVar } from '../../../api';
import { LOCAL_STORAGE_TOKEN_KEY } from '../../../constants';
import { useLocalStorage } from '../../../hooks';
import { routes } from '../../../routes';
import { AuthInput } from '../types';

import styles from './styles.module.scss';

const LOGIN_INPUT_NAME = 'login';
const PASSWORD_INPUT_NAME = 'password';

export const SignUpForm = () => {
  const [signIn, { data, loading }] = useMutation(SIGN_IN_MUTATION);
  const navigate = useNavigate();
  const { setToken } = useLocalStorage();
  const onSubmit = useCallback(
    async ({ login, password }: AuthInput) => {
      await signIn({ variables: { login, password } });

      setToken(LOCAL_STORAGE_TOKEN_KEY);
      userVar(data?.login?.user);
      navigate(routes.employees);
    },
    [data?.login?.user, navigate, setToken, signIn]
  );

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className={styles.formContainer}>
      <Form onSubmit={onSubmit}>
        <Input name={LOGIN_INPUT_NAME} required label={'name'} />
        <PasswordInput name={PASSWORD_INPUT_NAME} required label={'password'} />
        <SubmitButton />
      </Form>
    </div>
  );
};
