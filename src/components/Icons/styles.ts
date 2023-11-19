import { HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import theme from '../../styles/theme';

export type IconSizes = 'extrasmall' | 'small' | 'medium' | 'large';
export type IconColor = 'primary' | 'secondary' | 'error' | 'inherit';

const sizes: Record<IconSizes, string> = {
  extrasmall: '12px',
  small: '24px',
  medium: '32px',
  large: '42px'
};

const colors: Record<IconColor, string> = {
  primary: theme.colors.gray[800],
  secondary: theme.colors.gray[500],
  error: theme.colors.error[500],
  inherit: 'currentColor'
};

export interface IconProps extends HTMLAttributes<SVGElement> {
  size?: IconSizes;
  color?: IconColor;
  $isButton?: boolean;
  onClick?: () => void;
}

export const Icon = styled.svg<IconProps>`
  ${({ size = 'small', color = 'inherit', $isButton }) => css`
    width: ${sizes[size]};
    height: ${sizes[size]};
    color: ${colors[color]};
    cursor: ${$isButton ? 'pointer' : 'auto'};
  `}
`;
