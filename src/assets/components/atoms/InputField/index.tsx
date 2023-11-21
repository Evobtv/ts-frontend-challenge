import React from 'react';

import { UserIcon, MailIcon, LockClosedIcon } from '../../../icons/icons';
import { InputComponentProps } from './types';
import theme from '../../../styles/themes/variables';
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

  const { error, icon, hasError, ...inputProps } = inputConfig as { error: string; icon: IconVariant; hasError: boolean; };

  const IconComponent = decideIcon(icon);

  return (
    <S.InputContainer>
      <S.InputIconContainer >
        <S.Input $hasError={!!hasError} {...inputProps} />
        <S.IconContainer $hasError={!!hasError}>
          <S.Icon as={IconComponent} strokeColor={hasError ? theme.colors.error : theme.colors.gray[0]} />
        </S.IconContainer>
      </S.InputIconContainer>
      <S.Span $hasError={!!hasError}>{error || '\u00A0'}</S.Span>
    </S.InputContainer>
  );
};

export default InputComponent;