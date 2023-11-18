import Feedback from '../../components/Feedback';
import Text from '../../components/Text';
import * as S from './styles';

export default function NotFound() {
  return (
    <Feedback>
      <Text
        $variant="heading1"
        $weight={800}
        $align="center"
        $color="secondary"
      >
        404
      </Text>
      <Text $variant="heading2" $align="center" $color="secondary">
        Página não encontrada
      </Text>
      <S.Link href="/login">Ir para o login</S.Link>
    </Feedback>
  );
}
