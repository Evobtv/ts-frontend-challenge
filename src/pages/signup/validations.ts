import { Validations } from '../../hooks/useForm';
import { SignUpForm } from './types';

const validations: Validations<SignUpForm> = {
  username: name => {
    if (!name.trim()) return 'O nome de usuário é obrigatório';
  },
  email: email => {
    if (!email.trim()) return 'O email de usuário é obrigatório';
    const regex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if (!regex.test(email)) return 'Insira um e-mail válido';
  },
  password: password => {
    if (!password) return 'A senha é obrigatória';
  },
  confirmPassword: (confirm, { password }) => {
    if (confirm !== password) return 'As senhas precisam ser iguais';
  }
};

export default validations;
