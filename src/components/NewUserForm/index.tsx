import { useState, useEffect } from 'react';
import {
  Error,
  ButtonsContainer,
  OptionsContainer,
  LoginMessage,
} from './style';

import { handleValidity } from '../utils/ValidationForm';
import { updateInputValue } from '../utils/HandleChange';
import FieldComponent from '../FieldComponent';
import TitleComponent from '../TittleComponent';
import InputContainerComponent from '../InputContainerComponent';
import EmailIconComponent from '../icons/EmailIcon';
import PasswordIconComponent from '../icons/PasswordIcon';
import UserIconComponent from '../icons/UserIcon';
import Button from '../Button';
import { ErrorMessage, NewUserFormProps } from '../../types/globals';
import InputComponent from '../InputComponent';

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
      console.log(errorMessage.fillAllFields)
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
    console.log(errorMessage.userRegistered)
    setLoginMessage(errorMessage.userRegistered);
  };

  return (
    <>
      <TitleComponent>Criar nova conta</TitleComponent>
      <form method="post" onSubmit={handleRegistration}>
        <FieldComponent>
          <InputContainerComponent typeErrorMessage={nameError}>
            <InputComponent
              value={name}
              required
              typeErrorMessage={nameError}
              type="text"
              placeholder="Nome"
              onChange={(e) => updateInputValue(e, setName)}
              onInvalid={(e) => handleValidity(e, setNameError)}
            />
            <UserIconComponent color={emailError ? '#F56565' : '#4A5568'} />
          </InputContainerComponent>
          <Error>{nameError}</Error>
        </FieldComponent>
        <FieldComponent>
          <InputContainerComponent typeErrorMessage={emailError}>
            <InputComponent
              type="email"
              value={email}
              placeholder="E-mail"
              typeErrorMessage={emailError}
              required
              onChange={(e) => updateInputValue(e, setEmail)}
              onInvalid={(e) => handleValidity(e, setEmailError)}
            />
            <EmailIconComponent color={emailError ? '#F56565' : '#4A5568'} />
          </InputContainerComponent>
          <Error>{emailError}</Error>
        </FieldComponent>

        <FieldComponent>
          <InputContainerComponent typeErrorMessage={passwordError}>
            <InputComponent
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
            <PasswordIconComponent
              color={passwordError ? '#F56565' : '#4A5568'}
            />
          </InputContainerComponent>
          <Error>{passwordError}</Error>
        </FieldComponent>
        <FieldComponent>
          <InputContainerComponent typeErrorMessage={confirmPasswordError}>
            <InputComponent
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
            <PasswordIconComponent
              color={passwordError ? '#F56565' : '#4A5568'}
            />
          </InputContainerComponent>
          <Error>{confirmPasswordError}</Error>
        </FieldComponent>
        <ButtonsContainer>
          <Button
            variant="solid"
            type="submit"
            width="100%"
          >
            Cadastrar-se
          </Button>
        </ButtonsContainer>
      </form>
      <OptionsContainer onClick={() => setIsRegisterVisible(false)}>
        <Button variant='filter'>Já tem uma conta?</Button>
        <Button type="button" variant="transparent">
          Acesse sua conta
        </Button>
      </OptionsContainer>

      {<LoginMessage>{loginMessage}</LoginMessage>}
    </>
  );
};

export default NewUserForm;
