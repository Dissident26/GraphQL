import styles from './styles.module.scss';

export interface ISelectOption {
  value: string;
  label: string;
}

interface ISelect extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: ISelectOption[];
}

export const Select = ({ options, ...rest }: ISelect) => {
  return (
    <select {...rest}>
      {options?.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
};
