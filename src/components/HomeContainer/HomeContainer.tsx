import { useEffect, useState } from 'react';
import { fetchInfo } from '../../services/apiService';
import LoginForm from '../LoginForm';

const HomeContainer = () => {
  const [homeInfo, setHomeInfo] = useState({
    logoDesktop: '',
    slogan: '',
    subtitle: '',
    callAction: '',
    logoMobile: '',
    loginTitle: '',
    loginForgot: '',
    loginRegister: '',
    loginRegisterCall: '',
    loginCall: '',
  });

  useEffect(() => {
    const getHomeInfo = async () => {
      const data = await fetchInfo();
      if (data) {
        setHomeInfo({
          logoDesktop: data?.images?.logo,
          slogan: data?.texts?.slogan,
          subtitle: data?.texts?.subtitle,
          callAction: data?.texts?.call_action,
          logoMobile: data?.images?.logo_mobile,
          loginTitle: data?.texts?.section_login?.title,
          loginForgot: data?.texts?.section_login?.forgot,
          loginRegister: data?.texts?.section_login?.register,
          loginRegisterCall: data?.texts?.section_login?.register_call,
          loginCall: data?.texts?.section_login?.login_call,
        });
      }
    };
    getHomeInfo();
  }, []);

  setTimeout(() => {
    console.log(homeInfo);
  }, 500);

  return (
    <div>
      <LoginForm
        title={homeInfo.loginTitle}
        forgot={homeInfo.loginForgot}
        register={homeInfo.loginRegister}
        registerCall={homeInfo.loginRegisterCall}
        loginCall={homeInfo.loginCall}
      />
    </div>
  );
};

export default HomeContainer;
