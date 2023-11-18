import styled from 'styled-components';
import { css } from 'styled-components';

const coverImageStyles = css`
  background-color: ${props => props.theme.colors.gray.opacity};
  background-image: url('/auth-cover.png');
  background-repeat: no-repeat;
  background-position: center;
  background-blend-mode: multiply;
  background-attachment: fixed;
  background-size: cover;
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
