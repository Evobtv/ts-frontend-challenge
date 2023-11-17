import { useState } from 'react';
import { loginUser } from '../../services/apiService';
import {

  Field,
  Input,
  InputContainer,
  Title,

  Error,
  ButtonsContainer,
  LoginButton,
  ForgotButton,
  OptionsContainer,
  New,
  Register,
  LoginMessage,
} from './style';
import { handleValidity } from '../utils/ValidationForm';

interface LoginFormProps {
  title: string;
  forgot: string;
  register: string;
  registerCall: string;
  loginCall: string;
  setIsRegisterVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginForm = ({
  title,
  forgot,
  register,
  registerCall,
  loginCall,
  setIsRegisterVisible,
}: LoginFormProps) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');
  const [loginMessage, setLoginMessage] = useState<string>('');

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    callback: React.Dispatch<React.SetStateAction<string>>,
  ) => {
    callback(event.target.value);
  };

  const sendFormData = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const users = [
      {
        email,
        password,
      },
    ];

    try {
      const results = await loginUser(users);

      const firstResult = results[0];
      const message = firstResult.success
        ? 'Login realizado com sucesso.'
        : 'Login inválido.';

      setLoginMessage(message);
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
      <>
        <Title>{title}</Title>
        <form method="post" onSubmit={sendFormData}>
          <Field>
            <InputContainer typeErrorMessage={emailError}>
              <Input
                value={email}
                typeErrorMessage={emailError}
                type={'email'}
                placeholder="E-mail"
                required
                onChange={(e: React.InvalidEvent<HTMLInputElement>) =>
                  handleChange(e, setEmail)
                }
                onInvalid={(e: React.InvalidEvent<HTMLInputElement>) =>
                  handleValidity(e, setEmailError)
                }
              />
              <svg
                width="16"
                height="20"
                viewBox="0 0 16 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 5C12 6.06087 11.5786 7.07828 10.8284 7.82843C10.0783 8.57857 9.06087 9 8 9C6.93913 9 5.92172 8.57857 5.17157 7.82843C4.42143 7.07828 4 6.06087 4 5C4 3.93913 4.42143 2.92172 5.17157 2.17157C5.92172 1.42143 6.93913 1 8 1C9.06087 1 10.0783 1.42143 10.8284 2.17157C11.5786 2.92172 12 3.93913 12 5V5ZM8 12C6.14348 12 4.36301 12.7375 3.05025 14.0503C1.7375 15.363 1 17.1435 1 19H15C15 17.1435 14.2625 15.363 12.9497 14.0503C11.637 12.7375 9.85652 12 8 12V12Z"
                  stroke={emailError ? '#F56565' : '#4A5568'}
                  strokeWidth="2"
                  strokeLinecap="round"
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
                typeErrorMessage={passwordError}
                type="password"
                placeholder="Senha"
                required
                onChange={(e: React.InvalidEvent<HTMLInputElement>) =>
                  handleChange(e, setPassword)
                }
                onInvalid={(e: React.InvalidEvent<HTMLInputElement>) =>
                  handleValidity(e, setPasswordError)
                }
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
            {<LoginMessage>{loginMessage}</LoginMessage>}
          </Field>
          <ButtonsContainer>
            <ForgotButton type="button">{forgot}</ForgotButton>
            <LoginButton type="submit">{loginCall}</LoginButton>
          </ButtonsContainer>
        </form>
        <OptionsContainer onClick={() => setIsRegisterVisible(true)}>
          <New>{register}</New>
          <Register type="button">{registerCall}</Register>
        </OptionsContainer>
      </>
  );
};

export default LoginForm;
