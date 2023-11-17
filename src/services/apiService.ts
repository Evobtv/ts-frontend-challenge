interface UserCredentials {
  email: string;
  password: string;
}

interface LoginResult {
  success: boolean;
  message: string;
}

export const loginUser = async (
  users: UserCredentials[],
): Promise<LoginResult[]> => {
  const loginResults: LoginResult[] = [];

  for (const user of users) {
    const { email, password } = user;

    // Verificar no localStorage
    const storedEmail = localStorage.getItem('userEmail_' + email);
    const storedPassword = localStorage.getItem('userPassword_' + email);

    if (email === storedEmail && password === storedPassword) {
      loginResults.push({
        success: true,
        message: 'Login bem-sucedido com dados do localStorage para ' + email,
      });
      continue;
    }

    // Se não estiver no localStorage, verificar na API
    const formData = new URLSearchParams();
    formData.append('email', email);
    formData.append('password', password);

    try {
      const response = await fetch(
        'https://front.evob.dev.marcomapa.com/front_challenge/login/',
        {
          method: 'POST',
          body: formData,
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        },
      );

      if (response.ok) {
        // A resposta da API foi bem-sucedida
        loginResults.push({
          success: true,
          message: 'Login bem-sucedido com dados da API para ' + email,
        });
      } else {
        // Falha na resposta da API
        loginResults.push({
          success: false,
          message: 'Falha no login para ' + email,
        });
      }
    } catch (error) {
      console.error('Error during login for user ' + email, error);
      loginResults.push({
        success: false,
        message: 'Erro ao tentar logar ' + email,
      });
    }
  }

  return loginResults;
};

export const fetchInfo = async () => {
  try {
    const response = await fetch(
      'https://front.evob.dev.marcomapa.com/front_challenge/info/',
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro ao buscar informações de cadastro', error);
  }
};
