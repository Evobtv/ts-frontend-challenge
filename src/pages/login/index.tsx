import withAuthContainer from '../../HOC/auth';

import Text from '../../components/Text';

import * as S from './styles';
import { SectionLoginTexts } from '../../interfaces/info';
import Form from './Form';

function LoginInner({
  sectionLoginTexts
}: {
  sectionLoginTexts: SectionLoginTexts;
}) {
  return (
    <div>
      <Text $variant="heading1" $weight={300}>
        {sectionLoginTexts.title}
      </Text>

      <Form sectionLoginTexts={sectionLoginTexts} />

      <S.SignUpContainer>
        <Text $variant="body2" $align="center">
          {sectionLoginTexts.register}
        </Text>
        <S.SignUpLink href="/signup">
          {sectionLoginTexts.register_call}
        </S.SignUpLink>
      </S.SignUpContainer>
    </div>
  );
}

const Login = withAuthContainer(LoginInner);
export default Login;
