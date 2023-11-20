import useFormCase from './useFormCase';
import withAuthContainer from '../../HOC/auth';

import Button from '../../components/Button';
import { Lock, Person } from '../../components/Icons';
import Text from '../../components/Text';
import Input from '../../components/Input';

import * as S from './styles';
import { SectionLoginTexts } from '../../interfaces/info';

function LoginInner({
  sectionLoginTexts
}: {
  sectionLoginTexts: SectionLoginTexts;
}) {
  const { errorMessages, handleSubmit, loading, register, error } =
    useFormCase();

  return (
    <div>
      <Text $variant="heading1" $weight={300}>
        {sectionLoginTexts.title}
      </Text>

      {!!error && (
        <S.ErroContainer>
          <Text $variant="body1" $weight={600}>
            Error
          </Text>
          <Text $variant="body1">{error}</Text>
        </S.ErroContainer>
      )}

      <S.FormContainer onSubmit={handleSubmit}>
        <Input
          placeholder="email"
          style={{ width: '100%' }}
          icon={<Person />}
          {...register('email')}
          errorText={errorMessages?.email}
          error={!!errorMessages?.email}
        />
        <Input
          placeholder="senha"
          type="password"
          style={{ width: '100%' }}
          icon={<Lock />}
          {...register('password')}
          errorText={errorMessages?.password}
          error={!!errorMessages?.password}
        />

        <S.ButtonActionContainer>
          <S.ForgotPasswordLink href="/login">
            Esqueceu sua senha ?!
          </S.ForgotPasswordLink>
          <Button type="submit" disabled={loading} $fullWidth>
            Entrar
          </Button>
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
