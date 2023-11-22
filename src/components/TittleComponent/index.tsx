import { childrenProps } from '../../types/globals';
import { Title } from './style';
import { FC } from 'react';

const TitleComponent: FC<childrenProps> = ({ children }) => {
  return <Title>{children}</Title>;
};

export default TitleComponent;