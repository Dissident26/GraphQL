import { LogInForm } from './login-form';

import styles from './styles.module.scss';

export const LogIn = () => {
  return (
    <div className={styles.container}>
      <h2>Log In</h2>
      <LogInForm />
    </div>
  );
};
