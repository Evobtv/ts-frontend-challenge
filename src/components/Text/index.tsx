import { TextComponentProps, TextVariant } from './types';
import * as S from './styles';

const componentByVariant: Record<TextVariant, keyof JSX.IntrinsicElements> = {
  heading1: 'h1',
  heading2: 'h2',
  body1: 'p',
  body2: 'p',
  body3: 'p'
};

export default function Text({
  children,
  component,
  ...props
}: TextComponentProps) {
  return (
    <S.TextStyles
      {...props}
      as={component || componentByVariant[props.$variant ?? 'body1']}
    >
      {children}
    </S.TextStyles>
  );
}
