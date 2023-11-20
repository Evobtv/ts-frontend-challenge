import styled from 'styled-components';
import { TextColor, TextProps, TextVariant } from './types';
import theme from '../../styles/theme';

const fontSizeByVariant: Record<TextVariant, string> = {
  heading1: '3.6rem',
  heading2: '2.4rem',
  body1: '1.6rem',
  body2: '1.4rem',
  body3: '1.2rem'
};

const fontFamilyByVariant: Record<TextVariant, string> = {
  heading1: theme.fonts.heading,
  heading2: theme.fonts.heading,
  body1: theme.fonts.body,
  body2: theme.fonts.body,
  body3: theme.fonts.body
};

const textColor: Record<TextColor, string> = {
  primary: theme.colors.gray[800],
  secondary: theme.colors.gray[100],
  error: theme.colors.error[500],
  inherit: 'inherit'
};

export const TextStyles = styled.p<TextProps>`
  font-size: ${({ $variant }) => fontSizeByVariant[$variant ?? 'body1']};
  font-weight: ${({ $weight }) => $weight};
  font-family: ${({ $variant }) => fontFamilyByVariant[$variant ?? 'body1']};
  text-align: ${({ $align }) => $align};
  color: ${({ $color }) => textColor[$color ?? 'inherit']};
`;

TextStyles.defaultProps = {
  $align: 'left',
  $variant: 'body1',
  $weight: 400,
  $color: 'inherit'
};
