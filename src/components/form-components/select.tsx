import { Controller, useFormContext } from 'react-hook-form';

import styles from './styles.module.scss';

export interface ISelectOption {
  value: string;
  label: string;
}

interface ISelect extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: ISelectOption[];
  label?: string;
}

export const Select = ({ options, label, name, ...rest }: ISelect) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <>
          {label && <label htmlFor={name}>{label}</label>}
          <select {...rest} {...field}>
            {options?.map(({ value, label }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
          {errors[name] && <span className={styles.inputError}>{`${errors[name].message}`}</span>}
        </>
      )}
    />
  );
};
