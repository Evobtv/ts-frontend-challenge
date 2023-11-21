import styled, { keyframes } from 'styled-components';
import theme from '../../../../assets/styles/themes/variables';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const SnackbarWrapper = styled.div`
  position: fixed;
  z-index: 10;
  bottom: 20px;
  font-size: 1.6em;
  left: 50%;
  transform: translateX(-50%);
  color: ${theme.colors.white};
  padding: 10px 20px;
  border-radius: 5px;
  animation: ${fadeIn} 0.5s ease-in-out;

  &.error {
    background-color: ${theme.colors.error};
  }

  &.success {
    background-color: ${theme.colors.success};
  }

  &.hide {
    display: none;
  }
`;