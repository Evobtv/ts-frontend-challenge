import Feedback from '../../components/Feedback';
import Text from '../../components/Text';

export default function Profile() {
  return (
    <Feedback>
      <Text
        $variant="heading1"
        $weight={800}
        $align="center"
        $color="secondary"
      >
        Perfil
      </Text>
    </Feedback>
  );
}
