import React, { useState } from 'react';
import authStore from '../../../../api/authStore';
import * as S from './styles';
import Button from '../../atoms/Button/index'
import InputField from '../../atoms/InputField/index';
import Snackbar from '../../atoms/Snackbar/index'
import { emailValidator, requiredValidator } from '../../../../utils/validations'


interface UserLoginProps {
  loginSectionInfo: {
    title: string;
    forgot: string;
    register: string;
    buttons: {
      loginCall: string;
      registerCall: string;
    };
  };
  logo: string;
}

const UserLogin: React.FC<UserLoginProps> = ({ loginSectionInfo, logo  }) => {

  const [loadingBt, setLoadingBt] = useState(false);
  const [loginButtonText, setLoginButtonText] = useState(loginSectionInfo.buttons.loginCall);
  const [registerButtonText, setRegisterButtonText] = useState(loginSectionInfo.buttons.registerCall);


  //FORM STEPS
  const [formStep, setFormStep] = useState<'login' | 'sign-up' | 'forgot-password' | 'email-sent' | 'user-created'>('login');

  const gotoStep = (step: 'login' | 'sign-up' | 'forgot-password'| 'email-sent' | 'user-created') => {

    setFormStep(step);

    switch (step) {
      case 'login':
        setLoginButtonText(loginSectionInfo.buttons.loginCall);
        setRegisterButtonText(loginSectionInfo.buttons.registerCall);
        break;
      case 'sign-up':
        setLoginButtonText(loginSectionInfo.buttons.registerCall);
        setRegisterButtonText(loginSectionInfo.title);
        break;
      case 'forgot-password':
        setLoginButtonText('Continuar');
      break;
      break;
      default:
        setLoginButtonText(loginSectionInfo.buttons.loginCall);
        setRegisterButtonText(loginSectionInfo.buttons.registerCall);
        break;
    }
  };

  //INPUTS
  type IconVariant = 'user' | 'lock' | 'mail';

  //USERNAME

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    const validationError = emailValidator(newValue);

    setEmail((prev) => ({
      ...prev,
      inputConfig: {
        ...prev.inputConfig,
        value: newValue,
        error: validationError,
        hasError: validationError.length > 0,
      },
    }));
  }
  
  const [email, setEmail] = useState<{
    inputConfig: {
      type: string;
      name: string;
      placeholder: string;
      icon: IconVariant;
      value: string;
      onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
      error: string;
      hasError: boolean;
    },
  }>({
    inputConfig: {
      type: 'text',
      name: 'username',
      placeholder: 'e-mail',
      icon: 'user',
      value: '',
      onChange: handleEmailChange,
      error: '',
      hasError: false,
    },
  });

  //PASSWORD

  const handlePassChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    const validationError = requiredValidator(newValue)

    setPassword((prev) => ({
      ...prev,
      inputConfig: {
        ...prev.inputConfig,
        value: newValue,
        error: validationError,
        hasError: validationError.length > 0,
      },
    }));
  };

  
  const [password, setPassword] = useState<{
    inputConfig: {
      type: string;
      name: string;
      placeholder: string;
      icon: IconVariant;
      value: string;
      onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
      error: string;
      hasError: boolean;
    };
  }>({
    inputConfig: {
      type: 'password',
      name: 'password',
      placeholder: 'senha',
      icon: 'lock',
      value: '',
      onChange: handlePassChange,
      error: '',
      hasError: false,
    },
  });

  //NEWUSER

  const handleNewUserChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    const validationError = requiredValidator(newValue)

    setNewUser((prev) => ({
      ...prev,
      inputConfig: {
        ...prev.inputConfig,
        value: newValue,
        error: validationError,
        hasError: validationError.length > 0,
      },
    }));
  };

  
  const [newUser, setNewUser] = useState<{
    inputConfig: {
      type: string;
      name: string;
      placeholder: string;
      icon: IconVariant;
      value: string;
      onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
      error: string;
      hasError: boolean;
    };
  }>({
    inputConfig: {
      type: 'text',
      name: 'new-username',
      placeholder: 'usuário',
      icon: 'user',
      value: '',
      onChange: handleNewUserChange,
      error: '',
      hasError: false,
    },
  });

  //EMAIL

  const handleNewUserEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    const validationError = emailValidator(newValue);
    setNewUserEmail((prev) => ({
      ...prev,
      inputConfig: {
        ...prev.inputConfig,
        value: newValue,
        error: validationError,
        hasError: validationError.length > 0,
      },
    }));
  };

  const [newUserEmail, setNewUserEmail] = useState<{
    inputConfig: {
      type: string;
      name: string;
      placeholder: string;
      icon: IconVariant;
      value: string;
      onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
      error: string;
      hasError: boolean;
    };
  }>({
    inputConfig: {
      type: 'text',
      name: 'email',
      placeholder: 'e-mail',
      icon: 'mail',
      value: '',
      onChange: handleNewUserEmailChange,
      error: '',
      hasError: false,
    },
  });

  //NEWPASSOWORD
  const handleNewPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    const validationError = requiredValidator(newValue)


    setNewPassword((prev) => ({
      ...prev,
      inputConfig: {
        ...prev.inputConfig,
        value: newValue,
        error: validationError.length > 0 ? validationError : 'Sua senha deve ter entre 6 e 20 caracteres.',
        hasError: validationError.length > 0
      },
    }));
  };

  const [newPassword, setNewPassword] = useState<{
    inputConfig: {
      type: string;
      name: string;
      placeholder: string;
      icon: IconVariant;
      value: string;
      onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
      error: string;
      hasError: boolean;
    };
  }>({
    inputConfig: {
      type: 'password',
      name: 'new-password',
      placeholder: 'senha',
      icon: 'lock',
      value: '',
      onChange: handleNewPasswordChange,
      error: 'Sua senha deve ter entre 6 e 20 caracteres.',
      hasError: false,
    },
  });

  //CONFIRMPASSOWORD

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    const validationError = requiredValidator(newValue)

    setConfirmPassword((prev) => ({
      ...prev,
      inputConfig: {
        ...prev.inputConfig,
        value: newValue,
        error: validationError,
        hasError: validationError.length > 0,
      },
    }));
  };

  const [confirmPassword, setConfirmPassword] = useState<{
    inputConfig: {
      type: string;
      name: string;
      placeholder: string;
      icon: IconVariant;
      value: string;
      onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
      error: string;
      hasError: boolean;
    };
  }>({
    inputConfig: {
      type: 'password',
      name: 'confirm-new-password',
      placeholder: 'confirme sua senha',
      icon: 'lock',
      value: '',
      onChange: handleConfirmPasswordChange,
      error: '',
      hasError: false,
    },
  });

  //RESETEMAIL

  const handleResetEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    const validationError = emailValidator(newValue);
    setResetEmail((prev) => ({
      ...prev,
      inputConfig: {
        ...prev.inputConfig,
        value: newValue,
        error: validationError,
        hasError: validationError.length > 0,
      },
    }));
  };

  const [resetEmail, setResetEmail] = useState<{
    inputConfig: {
      type: string;
      name: string;
      placeholder: string;
      icon: IconVariant;
      value: string;
      onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
      error: string;
      hasError: boolean;
    };
  }>({
    inputConfig: {
      type: 'text',
      name: 'email',
      placeholder: 'e-mail',
      icon: 'mail',
      value: '',
      onChange: handleResetEmailChange,
      error: '',
      hasError: false,
    },
  });
  

  //SUBMIT HANDLERS
  type responseMessage = { Ok?: string } | { Error?: string } | null | Response | string;
  const [responseMessage, setResponseMessage] = useState<responseMessage>(null);


  const loginHandler = async (e: React.FormEvent) => {
    setResponseMessage('')
    setLoadingBt(true);
    e.preventDefault();

    const mail = email.inputConfig.value;
    const pass = password.inputConfig.value;

    const requestData = {
      mail,
      pass
    };

    try {
      const response: responseMessage = await authStore.login(requestData);
      setLoadingBt(false);
      setResponseMessage(response);
    } catch (err) {
      console.error(err);
    }
  };

  const registerHandler = async (e: React.FormEvent) => {
    e.preventDefault()
    gotoStep('user-created')
  };

  const resetPasswordHandler = async (e: React.FormEvent) => {
    e.preventDefault()
    gotoStep('email-sent')
  };


  return (
    <S.ResponsiveContainer>
      <Snackbar message={responseMessage ? JSON.stringify(responseMessage) : ""} />
      <S.MaxWidthDiv>
        {logo && <S.Logo src={logo} alt="logo" />}
        <S.Title $signUpStep={formStep === 'sign-up'} $formStep={formStep}>
          {formStep === 'login' && loginSectionInfo.title}
          {formStep === 'sign-up' && 'Criar nova conta'}
          {formStep === 'forgot-password' && 'Recupere sua senha'}
        </S.Title>
        <S.Form $formStep={formStep} onSubmit={formStep === 'login' ? loginHandler : (formStep === 'forgot-password' ? resetPasswordHandler : registerHandler)}>
          {formStep === 'login' && (
            <S.InputGroup key={formStep}>
              <InputField {...email} />
              <InputField {...password} />
            </S.InputGroup>
          )}
          {formStep === 'sign-up' && (
            <S.InputGroup key={formStep}>
              <InputField {...newUser} />
              <InputField {...newUserEmail} />
              <InputField {...newPassword} />
              <InputField {...confirmPassword} />
            </S.InputGroup>
          )}
          {formStep === 'forgot-password' && (
            <S.InputGroup key={formStep}>
              <S.Description>Insira seu email e nós iremos enviar instruções para resetar sua senha</S.Description>
              <InputField {...resetEmail} />
            </S.InputGroup>        
          )}
         {formStep === 'email-sent' && (
            <S.SuccessMessage>
              <span style={{ fontSize: '3em' }}>✔️ E-mail enviado!</span>
              <S.Description>Verifique sua caixa de entrada para instruções de redefinição de senha.</S.Description>
              <a onClick={() => gotoStep('login')} style={{ fontSize: '1.5em' }}>Voltar</a>
            </S.SuccessMessage>
          )}

          {formStep === 'user-created' && (
            <S.SuccessMessage>
              <span style={{ fontSize: '3em' }}>✔️ Conta criada com sucesso!</span>
              <S.Description>Para ativar sua conta verifique seu e-mail com as instruções de ativação.</S.Description>
              <a onClick={() => gotoStep('login')} style={{ fontSize: '1.5em' }}>Voltar</a>
            </S.SuccessMessage>
          )}
          {formStep !== 'email-sent' && formStep !== 'user-created' && (
            <S.ButtonLinkContainer>
              <Button $variantstyle="primary" loading={loadingBt}>
                {loginButtonText}
              </Button>
              {formStep === 'login' ? (
                <S.Link onClick={() => gotoStep('forgot-password')}>{loginSectionInfo.forgot}</S.Link>
              ) : formStep === 'forgot-password' ? (
                <S.Link onClick={() => gotoStep('login')}>Voltar</S.Link>
              ) : null}
            </S.ButtonLinkContainer>
          )}
        </S.Form>
        {formStep !== 'email-sent' && formStep !== 'forgot-password' && formStep !== 'user-created' && (
          <S.AdditionalButtonLinkContainer $flexDirection={formStep === 'sign-up' ? 'row' : 'column'}>
            <S.Span>
              {formStep === 'login' ? loginSectionInfo.register : 'Já tem uma conta?'}
            </S.Span>
            <Button
              $variantstyle="secondary"
              onClick={() => gotoStep(formStep === 'login' ? 'sign-up' : 'login')}
            >
              {registerButtonText}
            </Button>
          </S.AdditionalButtonLinkContainer>
        )}
      </S.MaxWidthDiv>
    </S.ResponsiveContainer>
  );
};

export default UserLogin;