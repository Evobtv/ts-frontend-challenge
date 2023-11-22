import { LoginResults, UserCredentials } from "../types/globals";

export const loginUser = async (
  users: UserCredentials[],
): Promise<LoginResults[]> => {
  const loginResults: LoginResults[] = [];
  
  const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');

  for (const user of users) {
    const { email, password } = user;


    const foundUser = storedUsers.find(
      (storedUser: UserCredentials) =>
        storedUser.email === email && storedUser.password === password,
    );

    if (foundUser) {
      loginResults.push({
        success: true,
        message: 'Login bem-sucedido com dados do localStorage para ' + email,
      });
      continue; 
    }

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
      
      const data = await response.json();

      if (data.Ok) {
        loginResults.push({
          success: true,
          message: 'Login bem-sucedido com dados da API para ' + email,
        });
      } else {
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
