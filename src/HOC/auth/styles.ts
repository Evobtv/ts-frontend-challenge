import styled from 'styled-components';
import Text from '../../components/Text';

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
