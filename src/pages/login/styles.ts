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
