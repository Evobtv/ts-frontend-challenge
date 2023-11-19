import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
`;

interface InputProps {
  $hasIcon?: boolean;
  $error?: boolean;
}

export const Input = styled.input<InputProps>`
  border: 0;
  outline: none;
  padding: 4px 0;
  padding-right: ${({ $hasIcon }) => ($hasIcon ? '32px' : '0')};
  border-bottom: 2px solid transparent;
  border-color: ${({ theme, $error }) =>
    $error ? theme.colors.error[500] : theme.colors.gray[800]};
  font-size: 1.8rem;
  color: ${({ theme, $error }) =>
    $error ? theme.colors.error[500] : theme.colors.gray[800]};

  &::placeholder {
    color: ${({ theme, $error }) =>
      $error ? theme.colors.error[300] : theme.colors.gray[500]} !important;
    font-size: 1.8rem;
  }
`;

Input.defaultProps = {
  $hasIcon: false,
  $error: false
};

export const IconContainer = styled.div<{ $error?: boolean }>`
  position: absolute;
  right: 0px;
  top: 50%;
  transform: translateY(-50%);
  color: ${({ theme, $error }) =>
    $error ? theme.colors.error[500] : 'inherit'};
`;

export const ErrorText = styled.p`
  color: ${({ theme }) => theme.colors.error[500]};
  font-size: 1.2rem;
  font-weight: 400;
  margin-top: 4px;

  @keyframes showUp {
    0% {
      transform: translateY(30%);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  animation: showUp 300ms ease;
`;
