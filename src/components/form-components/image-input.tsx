import { InputHTMLAttributes, useCallback } from 'react';
import { Controller, ControllerRenderProps, FieldValues, useFormContext } from 'react-hook-form';

import { useImageInput, InputEventType } from './hooks';

import styles from './styles.module.scss';

export interface IImageInput extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

type FormFieldType = ControllerRenderProps<FieldValues, string>;

export const ImageInput = ({ label, name, ...rest }: IImageInput) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const { onSelectFile, preview } = useImageInput();
  const onInputChange = useCallback(
    (e: InputEventType, field: FormFieldType) => {
      field.onChange?.(e);
      onSelectFile(e);
    },
    [onSelectFile]
  );

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <div className={styles.inputContainer}>
          {preview && <img src={preview} />}
          {label && <label htmlFor={name}>{label}</label>}
          <input type="file" accept="image/*" {...rest} {...field} onChange={(e) => onInputChange(e, field)} />
          {errors[name] && <span className={styles.inputError}>{`${errors[name].message}`}</span>}
        </div>
      )}
    />
  );
};
