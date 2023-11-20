import { useState } from 'react';

export type ValidationFn<T> = (value: keyof T, fields: T) => string | undefined;
export type Validations<T> = Partial<Record<keyof T, ValidationFn<T>>>;

export interface UseFormProps<T> {
  initialState: T;
  validations: Validations<T>;
}

export const useForm = <T>({ initialState, validations }: UseFormProps<T>) => {
  const [fields, setFields] = useState(initialState);
  const [errorMessages, setErrorMessages] = useState<
    Partial<Record<keyof T, string>>
  >({});

  const validateField = (value: keyof T, name: keyof T) => {
    if (!validations || !validations[name]) return;

    const error = (validations[name] as ValidationFn<T>)(value, fields);
    setErrorMessages(prev => ({
      ...prev,
      [name]: error
    }));
    return Boolean(error);
  };

  const register = (name: keyof T) => {
    const handleChangeField = (event: React.ChangeEvent<HTMLInputElement>) => {
      setFields({
        ...fields,
        [name]: event.target.value
      });
      if (errorMessages[name]) {
        validateField(event.target.value as keyof T, name);
      }
    };

    const handleBlur = () => {
      validateField(fields[name] as keyof T, name);
    };

    return {
      value: fields[name],
      onChange: handleChangeField,
      onBlur: handleBlur,
      name
    };
  };

  const handleSubmit = (callback: (data: T) => void) => {
    return (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      let hasError = false;
      for (const name in validations) {
        const isError = validateField(fields[name] as keyof T, name);
        if (isError) {
          hasError = true;
        }
      }

      if (hasError) return;
      callback(fields);
    };
  };

  return {
    register,
    errorMessages,
    fields,
    handleSubmit
  };
};
