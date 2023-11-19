import { Field } from './style';
import { FC } from 'react';

interface FieldComponentProps {
  children: React.ReactNode;
}

const FieldComponent: FC<FieldComponentProps> = ({ children }) => {
  return <Field>{children}</Field>;
};

export default FieldComponent;
