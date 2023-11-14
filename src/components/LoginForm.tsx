import { useState } from 'react';
import { loginUser } from '../services/apiService';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const user = {
      email,
      password
    }
    try {
      const data = await loginUser(user);
      console.log(data);
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Senha"
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginForm;
