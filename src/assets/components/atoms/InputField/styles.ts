import styled, { css } from 'styled-components';
import theme from '../../../assets/styles/themes/variables';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  max-width: 320px;
  width: 100%;
`;

export const InputIconContainer = styled.div<{ hasError?: boolean }>`
  display: flex;
  position: relative;
  margin-bottom: 4px;
  max-width: 320px;
  width: 100%;
  
`;

export const Input = styled.input<{ $hasError?: boolean }>`
  padding: 10px;
  box-sizing: border-box;
  width: 100%;
  max-width: 290px;
  border: none;
  height: 30px;
  border-bottom: 2px solid ${theme.colors.gray[0]};
  outline: none;
  background-color: transparent;
  padding-left: 0;
  position: relative;
  font-size: 1.8em;
  font-weight: 400;
  white-space: pre-wrap; 

  ${(props) =>
    props.$hasError &&
    css`
      border-bottom-color: ${theme.colors.error};
    `}

  &::placeholder {
    position: absolute;
    left: 0;
    bottom: 2px;
    font-size: 18px;
    line-height: 21.6px;
    font-weight: 400;
    color: ${(props) => (props.$hasError ? theme.colors.error : theme.colors.gray[2])};
    margin: 0;
    padding: 0;
  }
};`

export const IconContainer = styled.div<{ $hasError?: boolean }>`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid ${theme.colors.gray[0]};
  width: 30px;

  ${(props) =>
    props.$hasError &&
    css`
      border-bottom-color: ${theme.colors.error}; // Altera a cor da borda para vermelho em caso de erro
    `}
`;

export const Icon = styled.div<{ strokeColor: string }>`
  position: absolute;
  bottom: 20px;
  stroke: ${(props) => props.strokeColor};
`;

export const Span = styled.span<{ $hasError?: boolean }>`
    text-align: left;
    font-size: 12px;
    height: 14px;
    line-height: 14px;
    font-weight: 400;
    color: ${theme.colors.error};
    
`;

