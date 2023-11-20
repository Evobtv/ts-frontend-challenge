import styled from 'styled-components';

export const FormContainer = styled.form`
  margin-top: 34px;
  display: flex;
  flex-direction: column;
  gap: 34px;
`;

export const ButtonActionContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
    gap: 8px;
  }
`;

export const ForgotPasswordLink = styled.a`
  font-size: 1.4rem;
  text-decoration: underline;
  &:hover {
    color: ${props => props.theme.colors.gray[500]};
  }
`;

export const SignUpContainer = styled.div`
  margin-top: 32px;
  @media (max-width: 768px) {
    margin-top: 123px;
  }
`;

export const SignUpLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 8px auto 0;
  width: 180px;
  padding: 9px 0;
  border: 2px solid currentColor;
  font-size: 1.8rem;

  &:hover {
    color: ${props => props.theme.colors.gray[700]};
  }
`;

export const ErroContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 16px;
  margin: 32px 0;

  background-color: ${props => props.theme.colors.error[300]};
  color: ${props => props.theme.colors.gray[800]};
  border: 2px solid ${props => props.theme.colors.error[500]};

  @keyframes grow {
    0% {
      opacity: 0;
      transform: scale(0.5);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }

  animation: grow 300ms ease;
`;
