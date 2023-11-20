import styled from 'styled-components';
import { css } from 'styled-components';

export const coverImageStyles = css`
  position: relative;
  background-color: ${props => props.theme.colors.gray.opacity};

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;
    background-image: url('/auth-cover.png');
    background-repeat: no-repeat;
    background-position: right center;
    background-attachment: fixed;
    background-size: cover;
  }
`;

export const FeedbackContainer = styled.div`
  width: 100vw;
  height: 100vh;
  height: 100dvh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${coverImageStyles}
`;
