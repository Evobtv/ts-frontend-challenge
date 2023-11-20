import useFormCase from './hooks/useFormCase';

import Button from '../../components/Button';
import { Lock, Person } from '../../components/Icons';
import Text from '../../components/Text';
import Input from '../../components/Input';

import * as S from './styles';
import { SectionLoginTexts } from '../../interfaces/info';

export default function Form({
  sectionLoginTexts
}: {
  sectionLoginTexts: SectionLoginTexts;
}) {
  const { errorMessages, handleSubmit, loading, register, error } =
    useFormCase();

  return (
    <>
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
            {sectionLoginTexts.forgot}
          </S.ForgotPasswordLink>
          <Button type="submit" disabled={loading} $fullWidth>
            {loading ? 'Carregando' : sectionLoginTexts.login_call}
          </Button>
        </S.ButtonActionContainer>
      </S.FormContainer>
    </>
  );
}
