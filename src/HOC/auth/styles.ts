import styled from 'styled-components';
import Text from '../../components/Text';
import { coverImageStyles } from '../../components/Feedback/styles';

export const LoadingText = styled(Text)`
  @keyframes blink {
    50% {
      opacity: 0;
    }
  }

  animation: blink 1s infinite ease;
  color: ${props => props.theme.colors.gray[100]};
  text-shadow: 0 0 8px ${props => props.theme.colors.gray[100]};
  font-size: 3.6rem;
`;

export const AuthContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  height: 100dvh;
`;

export const InfoContainer = styled.div`
  ${coverImageStyles};

  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 16px;
`;

export const InfoWrapperMaxWidth = styled.div`
  max-width: 320px;
  margin: 0 auto;
`;

export const InfoTextsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 32px;
`;
