

interface LoginCredentials {
  email: string;
  password: string
}

export const loginUser = async ({
  email,
  password
}: LoginCredentials) => {
  const formData = new URLSearchParams();
  formData.append("email", email);
  formData.append("password", password);

  try {
    const response = await fetch('https://front.evob.dev.marcomapa.com/front_challenge/login/', {
      method: "POST",
      body: formData,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error during login", error);
  }
};

export const fetchInfo = async () => {
  try {
    const response = await fetch("https://front.evob.dev.marcomapa.com/front_challenge/info/");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao buscar informações de cadastro", error);
  }
};
