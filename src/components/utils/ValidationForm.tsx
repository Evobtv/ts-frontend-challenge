type ErrorMsg = {
  valueMissing: string;
  typeMismatch: string;
  tooShort: string;
  tooLong: string;
};

const errors: ErrorMsg = {
  valueMissing: "Este campo é obrigatório.",
  typeMismatch: "Insira um e-mail válido!",
  tooShort: "Sua senha deve ter entre 6 e 20 caracteres.",
  tooLong: "Sua senha deve ter entre 6 e 20 caracteres.",
};

export const handleValidity = (
  event: React.FormEvent<HTMLInputElement>,
  callback: React.Dispatch<React.SetStateAction<string>>
) => {
  event.preventDefault();

  const invalidEvent = event as unknown as React.InvalidEvent<HTMLInputElement>;
  const validity = invalidEvent.target.validity;

  type ValidityKey = keyof ValidityState;

  for (const key in validity) {
    if (validity[key as ValidityKey]) {
      // Verifica se a chave existe no tipo ErrorMessages
      if (key in errors) {
        const errorKey = key as keyof ErrorMsg;
        callback(errors[errorKey]);
      }
    }
  }
};
