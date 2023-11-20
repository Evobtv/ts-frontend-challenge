import React, { useState, useEffect } from 'react';
import infoStore from '../../api/infoStore';
import backgroundImage from '../../assets/images/background.png';
import * as S from './styles';
import UserLogin from '../../components/organisms/UserLogin/UserLogin';

const Login: React.FC = () => {
  const [loginPageInfo, setLoginPageInfo] = useState({
    title: '',
    subtitle: '',
    slogan: '',
    callAction: '',
  });
  const [logoImages, setLogoImages] = useState({
    mobile: '',
    desktop: '',
  });
  const [loginSectionInfo, setLoginSectionInfo] = useState({
    title: '',
    forgot: '',
    register: '',
    buttons: {
      loginCall: '',
      registerCall: '',
    },
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getLoginPageInfo = async () => {
      const data = await infoStore.loginPageInfo();
      if (data) {
        setLoginPageInfo({
          title: data?.texts?.title,
          subtitle: data?.texts?.subtitle,
          slogan: data?.texts?.slogan,
          callAction: data?.texts?.call_action,
        });

        setLoginSectionInfo({
          title: data?.texts?.section_login?.title,
          forgot: data?.texts?.section_login?.forgot,
          register: data?.texts?.section_login?.register,
          buttons: {
            loginCall: data?.texts?.section_login?.login_call,
            registerCall: data?.texts?.section_login?.register_call,
          },
        });

        setLogoImages({
          desktop: data?.images?.logo,
          mobile: data?.images?.logo_mobile,
        });
      }
      setLoading(false);
    };
    getLoginPageInfo();
  }, []);

  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <S.LoginBackgroundSection>
      <S.CenteredContainer>
        <S.BackgroundContainer>
          <S.BackgroundImage src={backgroundImage} alt="Background" />
          <S.ColorOverlay />
          <S.LogoContainer>
            <S.LogoDesktop src={logoImages.desktop} alt="Desktop Logo" />
            <S.LogoContent>
              <p>{loginPageInfo.subtitle}</p>
              <p>{loginPageInfo.slogan}</p>
              <p>{loginPageInfo.callAction}</p>
            </S.LogoContent>
          </S.LogoContainer>
        </S.BackgroundContainer>
        <UserLogin loginSectionInfo={loginSectionInfo} logo={logoImages.mobile} />
      </S.CenteredContainer>
    </S.LoginBackgroundSection>
  );
};

export default Login;