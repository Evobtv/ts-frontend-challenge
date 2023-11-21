import styled from 'styled-components';

interface InputProps {
  typeErrorMessage: string;
}

export const Input = styled.input<InputProps>`
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
    color: ${({ theme }) => theme.colors.lightGray};
  }
`;

export const Error = styled.p`
  color: ${({ theme }) => theme.colors.erroMessage};
  font-size: 1rem;

  position: absolute;
  bottom: -1.75rem;
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


export const ForgotButton = styled.button`
  display: block;

  border: none;
  background-color: transparent;

  text-decoration: underline;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.baseGray};

  transition: 100ms ease-out;

  cursor: pointer;

  &:hover {
    filter: brightness(3);
  }
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



export const LoginMessage = styled.p`
  display: block;
  width: 90%;

  margin: 0 auto;
  padding-top: 2rem;

  text-align: center;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.baseGray};
  font-weight: bold;
`;
