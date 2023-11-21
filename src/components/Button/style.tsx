import styled, { css } from 'styled-components';

interface ButtonProps {
  variant?: 'solid' | 'transparent' | 'filter';
  width?: '50%' | '100%';
}

const Button = styled.button<ButtonProps>`
  display: block;
  padding: 10px 2rem;
  font-size: 1.25rem;
  cursor: pointer;
  transition: 250ms ease-out;
  width: ${({ width }) => width || 'initial'};

  @media screen and (min-width: 728px) {
    width: ${({ width }) => width || 'initial'};
  }

  ${({ variant }) => {
    switch (variant) {
      case 'solid':
        return solidButtonStyles;
      case 'transparent':
        return transparentButtonStyles;
      case 'filter':
        return filterButtonStyles;
      default:
        return '';
    }
  }}
`;

const transparentButtonStyles = css`
  border: 2px solid ${({ theme }) => theme.colors.baseGray};  
  background-color: transparent;
  color: ${({ theme }) => theme.colors.baseGray};

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.baseGray};
    color: ${({ theme }) => theme.colors.white};
    border: 2px solid ${({ theme }) => theme.colors.semiGray};
  }
`;

const solidButtonStyles = css`
  background-color: ${({ theme }) => theme.colors.baseGray};
  border: 1px solid transparent;
  color: ${({ theme }) => theme.colors.white};

  &:hover {
    color: ${({ theme }) => theme.colors.baseGray};
    background-color: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.baseGray};
  }
`;

const filterButtonStyles = css`
  display: block;
  background-color: transparent;
  padding: 0;
  border: 0;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.baseGray};
  cursor: pointer;
  transition: 250ms ease-out;

  &:hover {
    filter: brightness(3);
  }
`;

export default Button;
