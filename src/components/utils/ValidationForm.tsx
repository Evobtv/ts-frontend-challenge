type ErrorMsg = {
  valueMissing: string;
  typeMismatch: string;
};
const errors: ErrorMsg = {
  valueMissing: "Este campo é obrigatório.",
  typeMismatch: "Insira um e-mail válido!",
};

export const handleValidity = (
  event: React.InvalidEvent<HTMLInputElement>,
  callback: React.Dispatch<React.SetStateAction<string>>
) => {
  event.preventDefault();

  const validity = event.target.validity;

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