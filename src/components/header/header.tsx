import { useReactiveVar } from '@apollo/client';
import { Link } from 'react-router-dom';
import { userVar } from '../../api';

import { routes } from '../../routes';
import { HeaderUserSection } from '../header-user-section';

import styles from './styles.module.scss';

export const Header = () => {
  const user = useReactiveVar(userVar);
  return (
    <div className={styles.container}>
      {user ? (
        <HeaderUserSection profile={user?.profile} />
      ) : (
        <>
          <Link to={routes.auth.logIn}>Log In</Link>
          <Link to={routes.auth.signUp}>Sign Up</Link>
        </>
      )}
    </div>
  );
};
