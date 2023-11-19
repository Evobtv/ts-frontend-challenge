import { Title } from './style';
import { FC } from 'react';

interface TitleComponentProps {
  children: React.ReactNode;
}

const TitleComponent: FC<TitleComponentProps> = ({ children }) => {
  return <Title>{children}</Title>;
};

export default TitleComponent;