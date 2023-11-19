import React, { forwardRef, Ref } from 'react';

import * as S from './styles';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: JSX.Element;
  errorText?: string;
  error?: boolean;
}

function InputInner(
  { icon, errorText, error, ...props }: InputProps,
  ref: Ref<HTMLInputElement>
) {
  return (
    <div>
      <S.Container>
        <S.Input ref={ref} $hasIcon={!!icon} $error={error} {...props} />
        {!!icon && <S.IconContainer $error={error}>{icon}</S.IconContainer>}
      </S.Container>
      {!!errorText && <S.ErrorText>{errorText}</S.ErrorText>}
    </div>
  );
}

const Input = forwardRef(InputInner);
export default Input;
