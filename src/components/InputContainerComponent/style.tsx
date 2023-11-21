import styled from "styled-components";

interface InputContainerProps {
  typeErrorMessage: string;
}

export const InputContainer = styled.label<InputContainerProps>`
  display: flex;
  justify-content: space-between;
  
  padding: 0.25rem 0;
  padding-right: 5px;

  border-bottom: 2px solid ${({ theme }) => theme.colors.baseGray};
  border-color: ${({ theme, typeErrorMessage }) => 
  typeErrorMessage ? theme.colors.errorMessage : theme.colors.baseGray};
`;