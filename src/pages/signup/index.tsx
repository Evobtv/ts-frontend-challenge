import withAuthContainer from '../../HOC/auth';

import Text from '../../components/Text';
import Form from './Form';

import { SectionLoginTexts } from '../../interfaces/info';
import * as S from './styles';

function SignUpInner({
  sectionLoginTexts
}: {
  sectionLoginTexts: SectionLoginTexts;
}) {
  return (
    <div>
      <Text $variant="heading1" $weight={300} style={{ marginBottom: '32px' }}>
        Criar nova conta
      </Text>

      <Form sectionLoginTexts={sectionLoginTexts} />

      <S.LoginActionContainer>
        <Text $variant="body2" $align="center">
          Já tem uma conta ?
        </Text>
        <S.LoginLink href="/login">{sectionLoginTexts.title}</S.LoginLink>
      </S.LoginActionContainer>
    </div>
  );
}

const SignUp = withAuthContainer(SignUpInner);
export default SignUp;
