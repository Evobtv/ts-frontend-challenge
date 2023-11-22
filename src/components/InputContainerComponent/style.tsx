import styled from "styled-components";
import { typeErrorMessageProps } from "../../types/globals";

export const InputContainer = styled.label<typeErrorMessageProps>`
  display: flex;
  justify-content: space-between;
  
  padding: 0.25rem 0;
  padding-right: 5px;

  border-bottom: 2px solid ${({ theme }) => theme.colors.baseGray};
  border-color: ${({ theme, typeErrorMessage }) => 
  typeErrorMessage ? theme.colors.errorMessage : theme.colors.baseGray};

`;