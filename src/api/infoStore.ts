import config from '../../config.json';

const apiUrl: string = config.baseUrl;

interface ApiResponse {
  images: {
    logo: string;
    logo_mobile: string;
  };
  texts: {
    title: string;
    subtitle: string;
    slogan: string;
    call_action: string;
    section_login: {
      title: string;
      forgot: string;
      register: string;
      register_call: string;
      login_call: string;
    };
  };
}

const infoStore = {

  loginPageInfo: async (): Promise<ApiResponse> => {

    try {
      const response = await fetch(`${apiUrl}/front_challenge/info/`);

      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.statusText}`);
      }

      const data: ApiResponse = await response.json();
      return data;

    } catch (error) {

      console.error('Erro ao buscar dados da página de login:', error);

      throw error;
      
    }
  },
};

export default infoStore;