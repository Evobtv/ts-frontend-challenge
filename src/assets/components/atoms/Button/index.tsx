import { forwardRef } from 'react';
import * as S from './styles';
import { BasicButtonProps } from './types';

const Button = forwardRef<HTMLButtonElement, BasicButtonProps>(
  ({ children, $variantstyle, loading, ...props }, ref) => {
    return (
      <S.Button {...props} $variantstyle={$variantstyle} ref={ref} disabled={loading}>
        {loading ? <S.Loader /> : children}
      </S.Button>
    );
  }
);

export default Button;