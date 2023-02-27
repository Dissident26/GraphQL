import { Header } from '../header';
import { Main } from '../main';

import styles from './styles.module.scss';

export const Root = () => (
  <div className={styles.container}>
    <Header />
    <Main />
  </div>
);
