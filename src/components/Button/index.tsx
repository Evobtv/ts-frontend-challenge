import React, { forwardRef } from 'react';
import * as S from './styles';
import { ButtonComponentProps } from './types';

function InnerButton(
  { children, $variant = 'primary', ...props }: ButtonComponentProps,
  ref: React.Ref<HTMLButtonElement>
) {
  return (
    <S.Button {...props} $variant={$variant} ref={ref}>
      {children}
    </S.Button>
  );
}

const Button = forwardRef(InnerButton);
export default Button;
