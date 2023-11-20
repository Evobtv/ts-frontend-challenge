import useFormCase from './hooks/useFormCase';

import Button from '../../components/Button';
import { Email, Lock, Person } from '../../components/Icons';
import Input from '../../components/Input';

import { SectionLoginTexts } from '../../interfaces/info';
import * as S from './styles';

export default function Form({
  sectionLoginTexts
}: {
  sectionLoginTexts: SectionLoginTexts;
}) {
  const { errorMessages, handleSubmit, register, loading } = useFormCase();

  return (
    <S.FormContainer onSubmit={handleSubmit}>
      <Input
        placeholder="usuário"
        icon={<Person />}
        {...register('username')}
        errorText={errorMessages?.username}
        error={!!errorMessages?.username}
      />
      <Input
        placeholder="email"
        icon={<Email />}
        {...register('email')}
        errorText={errorMessages?.email}
        error={!!errorMessages?.email}
      />
      <Input
        placeholder="senha"
        icon={<Lock />}
        {...register('password')}
        errorText={errorMessages?.password}
        error={!!errorMessages?.password}
        type="password"
      />
      <Input
        placeholder="confirme sua senha"
        icon={<Lock />}
        {...register('confirmPassword')}
        errorText={errorMessages?.confirmPassword}
        error={!!errorMessages?.confirmPassword}
        type="password"
      />

      <Button $variant="primary" type="submit" disabled={loading}>
        {loading ? 'Carregando' : sectionLoginTexts.register_call}
      </Button>
    </S.FormContainer>
  );
}
