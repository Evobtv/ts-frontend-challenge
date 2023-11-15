import styled from 'styled-components';
import { ButtonProps, ButtonVariant } from './types';
import theme from '../../styles/theme';

const backgroundByVariant: Record<ButtonVariant, string> = {
  primary: theme.colors.gray[800],
  secondary: 'transparent'
};

const colorByVariant: Record<ButtonVariant, string> = {
  primary: theme.colors.gray[100],
  secondary: theme.colors.gray[800]
};

const fontWeightByVariant: Record<ButtonVariant, number> = {
  primary: 500,
  secondary: 400
};

export const Button = styled.button<ButtonProps>`
  width: ${({ $fullWidth = false }) => ($fullWidth ? '100%' : 'auto')};
  cursor: pointer;
  background: ${({ $variant = 'primary' }) => backgroundByVariant[$variant]};

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 9px 12px;

  color: ${({ $variant = 'primary' }) => colorByVariant[$variant]};
  font-size: 1.8rem;
  font-weight: ${({ $variant = 'primary' }) => fontWeightByVariant[$variant]};

  transition: filter 200ms ease-in-out;

  &:disabled {
    cursor: default;
    opacity: 0.8;
  }

  &:hover {
    filter: brightness(1.3);
  }
`;

Button.defaultProps = {
  $fullWidth: false,
  $variant: 'primary'
};
