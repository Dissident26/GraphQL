import { Outlet } from 'react-router-dom';

import styles from "./styles.module.scss"

export const Main = () => (
  <div className={styles.container}>
    <Outlet />
  </div>
);
