import { useState } from 'react';
import { useForm } from '../../../hooks/useForm';

import { SignUpForm } from '../types';
import validations from '../validations';
import sleep from '../../../utils/sleep';

const useFormCase = () => {
  const [loading, setLoading] = useState(false);
  const { errorMessages, fields, handleSubmit, register } = useForm<SignUpForm>(
    {
      initialState: {
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
      },
      validations
    }
  );

  const handleSubmitForm = handleSubmit(async data => {
    console.log(data);
    setLoading(true);

    // fake api call
    await sleep(1000);

    setLoading(false);
    window.location.href = '/login';
  });

  return {
    errorMessages,
    fields,
    handleSubmit: handleSubmitForm,
    register,
    loading
  };
};

export default useFormCase;
