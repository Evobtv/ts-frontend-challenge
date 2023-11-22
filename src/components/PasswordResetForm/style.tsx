import styled from 'styled-components';
import { typeErrorMessageProps } from '../../types/globals';

export const Input = styled.input<typeErrorMessageProps>`
  display: block;
  width: 90%;

  background-color: transparent;
  border: 0;
  outline: 0;

  color: ${({ theme, typeErrorMessage }) => 
  typeErrorMessage ? theme.colors.errorMessage : theme.colors.baseGray};
  font-family: 'Lato', sans-serif;
  font-size: 1.25rem;

  &::placeholder {
    color: #a0aec0;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  row-gap: 1rem;

  @media screen and (min-width: 728px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    row-gap: 0;
    column-gap: 1rem;
  }
`;

export const Button = styled.button`
  display: block;
  width: 100%;

  background-color: ${({ theme }) => theme.colors.baseGray};
  border: 0;
  padding: 10px 2rem;

  color: ${({ theme }) => theme.colors.white};
  font-size: 1.25rem;

  cursor: pointer;
`;

export const Message = styled.div`
  margin-top: 20px;
  color: ${({ theme }) => theme.colors.baseMessage};
  font-size: 16px;
`;

export const ButtonReturnLogin = styled.button`
  display: block;
  width: 50%;

  border: 2px solid ${({ theme }) => theme.colors.baseGray};
  padding: 10px 1rem;

  background-color: transparent;

  color: ${({ theme }) => theme.colors.baseGray};
  font-size: 1.25rem;

  cursor: pointer;

  &:hover,
  &:focus {
    background-color: #${({ theme }) => theme.colors.semiGray};
  }

  @media screen and (min-width: 728px) {
    width: initial;
  }
`;

export const Error = styled.p`
  color: ${({ theme }) => theme.colors.erroMessage};
  font-size: 1rem;

  position: absolute;
  bottom: -1.75rem;
`;

export const OptionsContainer = styled.div`
  display: flex;

  margin-top: 5rem;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 1rem;

  @media screen and (min-width: 728px) {
    margin-top: 3rem;
  }
`;
