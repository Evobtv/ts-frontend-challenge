import styled from 'styled-components';

export const FormContainer = styled.form`
  display: grid;
  gap: 32px;

  input {
    width: 100%;
  }
`;

export const LoginActionContainer = styled.div`
  margin-top: 32px;
  @media (max-width: 768px) {
    margin-top: 123px;
  }

  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
`;

export const LoginLink = styled.a`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 9px 0;
  border: 2px solid currentColor;
  font-size: 1.8rem;

  &:hover {
    color: ${props => props.theme.colors.gray[700]};
  }
`;
