import { InputContainer } from './style';
import { FC } from 'react';

interface InputContainerComponentProps {
  children: React.ReactNode;
  typeErrorMessage: string;
}

const InputContainerComponent: FC<InputContainerComponentProps> = ({ children, typeErrorMessage }) => {
  return <InputContainer typeErrorMessage={typeErrorMessage}>{children}</InputContainer>;
};

export default InputContainerComponent;