import { InputHTMLAttributes } from 'react';
import { Spinner } from '../spinner';

import styles from './styles.module.scss';

interface SubmitButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  isLoading?: boolean;
};

export const SubmitButton = ({isLoading, disabled, ...rest}: SubmitButtonProps) => {

  return <>
  <input type="submit" value="Submit" className={styles.submit} disabled={disabled || isLoading} {...rest} />
  {isLoading && <Spinner />}
  </>;
};
