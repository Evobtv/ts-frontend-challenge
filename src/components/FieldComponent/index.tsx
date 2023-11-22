import { childrenProps } from '../../types/globals';
import { Field } from './style';
import { FC } from 'react';

const FieldComponent: FC<childrenProps> = ({ children }) => {
  return <Field>{children}</Field>;
};

export default FieldComponent;
