import { useState } from 'react';
import { useForm } from '../../../hooks/useForm';

import { login } from '../../../services/requests';
import { LoginResponse } from '../../../interfaces/login';
import { LoginForm } from '../types';
import validations from '../validations';

const useFormCase = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { errorMessages, register, handleSubmit } = useForm<LoginForm>({
    initialState: {
      email: '',
      password: ''
    },
    validations
  });

  const handleSubmitForm = handleSubmit(async data => {
    setError(null);
    const formData = new FormData();
    formData.append('email', data.email);
    formData.append('password', data.password);

    const { options, url } = login(formData);
    setLoading(true);
    try {
      const result = await fetch(url, options);
      const data: LoginResponse = await result.json();

      if (data.Ok) {
        window.location.href = '/profile';
      } else {
        setError(data?.Error || 'Ocorreu um erro inesperado');
      }
    } catch (error) {
      console.log(error);
      setError('Ocorreu um erro inesperado');
    } finally {
      setLoading(false);
    }
  });

  return {
    loading,
    errorMessages,
    register,
    handleSubmit: handleSubmitForm,
    error
  };
};

export default useFormCase;
