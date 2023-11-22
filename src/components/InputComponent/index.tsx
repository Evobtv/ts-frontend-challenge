import React from 'react';
import { Input } from './style';
import { InputComponentProps } from '../../types/globals';

const InputComponent: React.FC<InputComponentProps> = ({
  value,
  typeErrorMessage,
  type,
  placeholder,
  onChange,
  onInvalid
}) => {
  return (
    <>
      <Input
        value={value}
        typeErrorMessage={typeErrorMessage || ''}
        type={type}
        placeholder={placeholder}
        required
        onChange={onChange}
        onInvalid={onInvalid}
      />
    </>
  );
};

export default InputComponent;
