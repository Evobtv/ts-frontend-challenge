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

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 76px;
    padding-top: 44px;
  }
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

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContentWrapper = styled.div`
  padding: 0 28px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    height: 100%;
  }
`;

export const ContentWrapperMaxWidth = styled.div`
  max-width: 320px;
  width: 100%;
  margin: 0 auto;
`;
