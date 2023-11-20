import { Validations } from '../../hooks/useForm';
import { LoginForm } from './types';

const validations: Validations<LoginForm> = {
  email: name => {
    if (!name.trim()) return 'O email de usuário é obrigatório';
    const regex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if (!regex.test(name)) return 'Insira um e-mail válido';
  },
  password: password => {
    if (!password.trim()) return 'A senha é obrigatória';
  }
};

export default validations;
