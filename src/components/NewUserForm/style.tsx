import styled from "styled-components";

interface InputProps {
  typeErrorMessage: string;
}

export const Input = styled.input<InputProps>`
  display: block;
  width: 90%;

  background-color: transparent;
  border: 0;
  outline: 0;
  
  font-family: "Lato", sans-serif;
  font-size: 1.25rem;
  color: ${({ theme, typeErrorMessage }) => 
  typeErrorMessage ? theme.colors.errorMessage : theme.colors.baseGray};

  &::placeholder {
    color: ${({ theme }) => theme.colors.lightGray};
  }
`;

export const Error = styled.p`
  position: absolute;
  bottom: -1.75rem;
  
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.erroMessage};
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



export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  column-gap: 1rem;
  
  margin-top: 5rem;

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
