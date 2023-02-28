import { useMutation } from '@apollo/client';
import { useCallback } from 'react';

import { Form, Input, PasswordInput, Spinner, SubmitButton } from '../../';
import { SIGN_IN_MUTATION } from '../../../api';

import styles from './styles.module.scss';

const LOGIN_INPUT_NAME = 'login';
const PASSWORD_INPUT_NAME = 'password';

export const SignUpForm = () => {
  const [signIn, { data, loading, error }] = useMutation(SIGN_IN_MUTATION);
  const onSubmit = useCallback(async ({ login, password }: any) => {
    await signIn({ variables: { login, password } });
  }, []);

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
