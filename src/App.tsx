import { useEffect, useState } from 'react'
import './App.css'
import LoginForm from './components/LoginForm';
import { fetchInfo } from './services/apiService';




function App() {
  
  const [homeInfo, setHomeInfo] = useState({
    subtitle: '',
    slogan: '',
    callAction: '',
    logoDesktop: '',
    logoMobile: '',
    loginTitle: '',
    loginForgot: '',
    loginRegister: '',
    loginRegisterCall: '',
    loginCall: ''
  });


  useEffect(() => {
    const getHomeInfo = async () => {
      const data = await fetchInfo();
      if (data) {
        setHomeInfo({
          subtitle: data?.texts?.subtitle,
          slogan: data?.texts?.slogan,
          callAction: data?.texts?.call_action,
          logoDesktop: data?.images?.logo,
          logoMobile: data?.images?.logo_mobile,
          loginTitle: data?.texts?.section_login?.title,
          loginForgot: data?.texts?.section_login?.forgot,
          loginRegister: data?.texts?.section_login?.register,
          loginRegisterCall: data?.texts?.section_login?.register_call,
          loginCall: data?.texts?.section_login?.login_call,
        });
      }
    }
    getHomeInfo();
  }, []);

  setTimeout(()=>{
    console.log(homeInfo)
  }, 500)

  return (
    <>
      <LoginForm/>
    </>
  )
}

export default App
