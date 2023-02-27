import { ApolloError } from '@apollo/client';

import styles from './styles.module.scss';

interface IRequestError {
  error: ApolloError;
}

export const RequestError = ({ error }: IRequestError) => error && <p className={styles.error}>{error.message}</p>;
