import config from '../../config.json'

interface LoginData {
  user: string;
  pass: string;
}

const apiUrl: string = config.baseUrl;

const authStore = {
  login: (data: LoginData): Promise<Response> => {

    const credentialsEncoded = new URLSearchParams();
    credentialsEncoded.append("email", data.user);
    credentialsEncoded.append("password", data.pass);

    return new Promise((resolve, reject) => {
      fetch(`${apiUrl}/front_challenge/login/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: credentialsEncoded,
      })
        .then((response) => {
          const data = response.json();
          resolve(data); 
        })
        .catch((error) => {
          reject(error);
        });
    });
  },

  logout() {
    return 'Logout!'
  },

  verifyToken() {
    return 'Vetify Token!'
  },

  forgotPassword() {
    return 'Forgot Password!'
  },

  resetPassword() {
    return 'Reset Password!'
  }

};

export default authStore;



