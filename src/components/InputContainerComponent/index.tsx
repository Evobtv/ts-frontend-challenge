import { InputContainerComponentProps } from '../../types/globals';
import { InputContainer } from './style';
import { FC } from 'react';

const InputContainerComponent: FC<InputContainerComponentProps> = ({ children, typeErrorMessage }) => {
  return <InputContainer typeErrorMessage={typeErrorMessage}>{children}</InputContainer>;
};

export default InputContainerComponent;