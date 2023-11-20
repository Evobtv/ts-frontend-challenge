import React from 'react';

import { UserIcon, MailIcon, LockClosedIcon } from '../../../assets/icons/icons';
import { InputComponentProps } from './types';
import theme from '../../../assets/styles/themes/variables';
import * as S from './styles';

const decideIcon = (icon: 'user' | 'lock' | 'mail') => {
  switch (icon) {
    case 'user':
      return UserIcon;
    case 'lock':
      return LockClosedIcon;
    case 'mail':
      return MailIcon;
    default:
      return UserIcon;
  }
};

const InputComponent: React.FC<InputComponentProps> = ({ inputConfig = {} }) => {
  type IconVariant = 'user' | 'lock' | 'mail';

  const { error, icon, ...inputProps } = inputConfig as { error: string; icon: IconVariant };

  const IconComponent = decideIcon(icon);

  return (
    <S.InputContainer>
      <S.InputIconContainer >
        <S.Input $hasError={!!error} {...inputProps} />
        <S.IconContainer $hasError={!!error}>
          <S.Icon as={IconComponent} strokeColor={error ? theme.colors.error : theme.colors.gray[0]} />
        </S.IconContainer>
      </S.InputIconContainer>
      <S.Span $hasError={!!error}>{error || '\u00A0'}</S.Span>
    </S.InputContainer>
  );
};

export default InputComponent;