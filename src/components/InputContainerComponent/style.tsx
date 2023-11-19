import styled from "styled-components";

interface InputContainerProps {
  typeErrorMessage: string;
}

export const InputContainer = styled.label<InputContainerProps>`
  display: flex;
  justify-content: space-between;
  
  padding: 0.25rem 0;
  padding-right: 5px;

  border-bottom: 2px solid #2d3748;
  border-color: ${(props) => (props.typeErrorMessage ? '#F56565' : '#2d3748')};
`;