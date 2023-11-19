import withAuthContainer from '../../HOC/auth';
import Button from '../../components/Button';
import { Lock, Person } from '../../components/Icons';
import Input from '../../components/Input';
import Text from '../../components/Text';
import { SectionLoginTexts } from '../../interfaces/info';
import * as S from './styles';

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

      <S.FormContainer>
        <Input
          placeholder="usuário"
          style={{ width: '100%' }}
          icon={<Person />}
        />
        <Input
          placeholder="senha"
          type="password"
          style={{ width: '100%' }}
          icon={<Lock />}
        />

        <S.ButtonActionContainer>
          <S.ForgotPasswordLink href="/login">
            Esqueceu sua senha ?!
          </S.ForgotPasswordLink>
          <Button type="submit">Entrar</Button>
        </S.ButtonActionContainer>
      </S.FormContainer>

      <S.SignUpContainer>
        <Text $variant="body2" $align="center">
          Ainda não tem uma conta?
        </Text>
        <S.SignUpLink href="/signup">Cadastre-se</S.SignUpLink>
      </S.SignUpContainer>
    </div>
  );
}

const Login = withAuthContainer(LoginInner);
export default Login;
