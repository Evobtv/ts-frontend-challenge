type EmailValidationResult = string

export const emailValidator = (email: string): EmailValidationResult => {

  if (!email) {
    return 'Preencha este campo.';
  }

  const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValidEmail = emailRegExp.test(email);

  if (isValidEmail) {
    return ''
  } else {
    return 'E-mail inválido.';
  }
};

type RequiredValidationResult = string

export const requiredValidator = (value: string): RequiredValidationResult => {

  if (!value) {
    return 'Preencha este campo.';
  }

  return ''
};

type NewUserPassResult = string

export const newUserPass = (pass: string): NewUserPassResult => {

  if (!pass) {
    return 'Preencha este campo.';
  } else {
    return 'Sua senha deve ter entre 6 e 20 caracteres.'
  }
};


