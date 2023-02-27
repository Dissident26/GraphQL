import { Link } from 'react-router-dom';

import { routes } from '../../routes';

import styles from './styles.module.scss';

export const Header = () => {
  return (
    <div className={styles.container}>
      <Link to={routes.auth.logIn}>Log In</Link>
      <Link to={routes.auth.signUp}>Sign Up</Link>
    </div>
  );
};
