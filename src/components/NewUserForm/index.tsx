import { useState, useEffect } from 'react';
import {
  Field,
  Input,
  InputContainer,
  Title,
  Error,
  ButtonsContainer,
  LoginButton,
  OptionsContainer,
  New,
  Register,
  LoginMessage,
} from './style';

import { handleValidity } from '../utils/ValidationForm';
import { updateInputValue } from '../utils/HandleChange';

type NewUserFormProps = {
  setIsRegisterVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

type ErrorMessage = {
  fillAllFields: string;
  passwordsDontMatch: string;
  userRegistered: string;
};

const errorMessage: ErrorMessage = {
  fillAllFields: 'Por favor, preencha todos os campos.',
  passwordsDontMatch: 'A senha e a confirmação de senha não coincidem.',
  userRegistered: 'Usuário cadastrado com sucesso!',
};

const NewUserForm = ({ setIsRegisterVisible }: NewUserFormProps) => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const [nameError, setNameError] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');
  const [confirmPasswordError, setConfirmPasswordError] = useState<string>('');

  const [loginMessage, setLoginMessage] = useState<string>('');

  useEffect(() => {
    clearErrors();
  }, [name, email, password, confirmPassword]);

  const clearErrors = () => {
    setNameError(name ? '' : nameError);
    setEmailError(email ? '' : emailError);
    setPasswordError(password ? '' : passwordError);
    setConfirmPasswordError(confirmPassword ? '' : confirmPasswordError);
  };

  const validateForm = () => {
    const isFieldEmpty = !name || !email || !password || !confirmPassword;
    const doPasswordsMatch = password === confirmPassword;

    if (isFieldEmpty) {
      setLoginMessage(errorMessage.fillAllFields);
      return false;
    }

    if (!doPasswordsMatch) {
      setConfirmPasswordError(errorMessage.passwordsDontMatch);
      return false;
    }

    return true;
  };

  const handleRegistration = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const usersData = localStorage.getItem('users');
    const users = usersData ? JSON.parse(usersData) : [];

    const emailExists = users.some(
      (user: { email: string }) => user.email === email,
    );

    if (emailExists) {
      setEmailError('E-mail já cadastrado.');
      return;
    }

    const newUser = { email, password };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    setLoginMessage(errorMessage.userRegistered);
  };

  return (
    <>
      <Title>Criar nova conta</Title>
      <form method="post" onSubmit={handleRegistration}>
        <Field>
          <InputContainer typeErrorMessage={nameError}>
            <Input
              value={name}
              required
              typeErrorMessage={nameError}
              type="text"
              placeholder="Nome"
              onChange={(e) => updateInputValue(e, setName)}
              onInvalid={(e) => handleValidity(e, setNameError)}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              viewBox="0 0 16 20"
              height="20"
              fill="none"
            >
              <path
                strokeWidth="2"
                d="M12 5C12 6.06087 11.5786 7.07828 10.8284 7.82843C10.0783 8.57857 9.06087 9 8 9C6.93913 9 5.92172 8.57857 5.17157 7.82843C4.42143 7.07828 4 6.06087 4 5C4 3.93913 4.42143 2.92172 5.17157 2.17157C5.92172 1.42143 6.93913 1 8 1C9.06087 1 10.0783 1.42143 10.8284 2.17157C11.5786 2.92172 12 3.93913 12 5V5ZM8 12C6.14348 12 4.36301 12.7375 3.05025 14.0503C1.7375 15.363 1 17.1435 1 19H15C15 17.1435 14.2625 15.363 12.9497 14.0503C11.637 12.7375 9.85652 12 8 12V12Z"
                stroke={nameError ? '#F56565' : '#4A5568'}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </InputContainer>
          <Error>{nameError}</Error>
        </Field>
        <Field>
          <InputContainer typeErrorMessage={emailError}>
            <Input
              type="email"
              value={email}
              placeholder="E-mail"
              typeErrorMessage={emailError}
              required
              onChange={(e) => updateInputValue(e, setEmail)}
              onInvalid={(e) => handleValidity(e, setEmailError)}
            />
            <svg
              width="20"
              height="16"
              viewBox="0 0 20 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                d="M1 4L8.89 9.26C9.21866 9.47928 9.6049 9.5963 10 9.5963C10.3951 9.5963 10.7813 9.47928 11.11 9.26L19 4M3 15H17C17.5304 15 18.0391 14.7893 18.4142 14.4142C18.7893 14.0391 19 13.5304 19 13V3C19 2.46957 18.7893 1.96086 18.4142 1.58579C18.0391 1.21071 17.5304 1 17 1H3C2.46957 1 1.96086 1.21071 1.58579 1.58579C1.21071 1.96086 1 2.46957 1 3V13C1 13.5304 1.21071 14.0391 1.58579 14.4142C1.96086 14.7893 2.46957 15 3 15Z"
                strokeWidth="2"
                stroke={emailError ? '#F56565' : '#4A5568'}
                strokeLinejoin="round"
              />
            </svg>
          </InputContainer>
          <Error>{emailError}</Error>
        </Field>

        <Field>
          <InputContainer typeErrorMessage={passwordError}>
            <Input
              value={password}
              type="password"
              placeholder="Senha"
              typeErrorMessage={passwordError}
              minLength={6}
              maxLength={20}
              required
              onChange={(e) => updateInputValue(e, setPassword)}
              onInvalid={(e) => handleValidity(e, setPasswordError)}
            />
            <svg
              width="18"
              height="20"
              viewBox="0 0 18 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 13V15M3 19H15C15.5304 19 16.0391 18.7893 16.4142 18.4142C16.7893 18.0391 17 17.5304 17 17V11C17 10.4696 16.7893 9.96086 16.4142 9.58579C16.0391 9.21071 15.5304 9 15 9H3C2.46957 9 1.96086 9.21071 1.58579 9.58579C1.21071 9.96086 1 10.4696 1 11V17C1 17.5304 1.21071 18.0391 1.58579 18.4142C1.96086 18.7893 2.46957 19 3 19ZM13 9V5C13 3.93913 12.5786 2.92172 11.8284 2.17157C11.0783 1.42143 10.0609 1 9 1C7.93913 1 6.92172 1.42143 6.17157 2.17157C5.42143 2.92172 5 3.93913 5 5V9H13Z"
                stroke={passwordError ? '#F56565' : '#4A5568'}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </InputContainer>
          <Error>{passwordError}</Error>
        </Field>
        <Field>
          <InputContainer typeErrorMessage={confirmPasswordError}>
            <Input
              required
              type="password"
              placeholder="Confirme sua senha"
              value={confirmPassword}
              minLength={6}
              maxLength={20}
              typeErrorMessage={confirmPasswordError}
              onChange={(e) => updateInputValue(e, setConfirmPassword)}
              onInvalid={(e) => handleValidity(e, setConfirmPasswordError)}
            />
            <svg
              width="18"
              height="20"
              viewBox="0 0 18 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 13V15M3 19H15C15.5304 19 16.0391 18.7893 16.4142 18.4142C16.7893 18.0391 17 17.5304 17 17V11C17 10.4696 16.7893 9.96086 16.4142 9.58579C16.0391 9.21071 15.5304 9 15 9H3C2.46957 9 1.96086 9.21071 1.58579 9.58579C1.21071 9.96086 1 10.4696 1 11V17C1 17.5304 1.21071 18.0391 1.58579 18.4142C1.96086 18.7893 2.46957 19 3 19ZM13 9V5C13 3.93913 12.5786 2.92172 11.8284 2.17157C11.0783 1.42143 10.0609 1 9 1C7.93913 1 6.92172 1.42143 6.17157 2.17157C5.42143 2.92172 5 3.93913 5 5V9H13Z"
                stroke={confirmPasswordError ? '#F56565' : '#4A5568'}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </InputContainer>
          <Error>{confirmPasswordError}</Error>
        </Field>
        <ButtonsContainer>
          <LoginButton
            type="submit"
            onClick={() => setLoginMessage('Usuário cadastrado')}
          >
            Cadastrar-se
          </LoginButton>
        </ButtonsContainer>
      </form>
      <OptionsContainer onClick={() => setIsRegisterVisible(false)}>
        <New>Já tem uma conta?</New>
        <Register type="button">Acesse sua conta</Register>
      </OptionsContainer>

      {<LoginMessage>{loginMessage}</LoginMessage>}
    </>
  );
};

export default NewUserForm;
