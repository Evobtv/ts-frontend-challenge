import styled from "styled-components";
import { typeErrorMessageProps } from "../../types/globals";

export const Input = styled.input<typeErrorMessageProps>`
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