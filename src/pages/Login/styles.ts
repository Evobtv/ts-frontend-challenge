import styled, { keyframes } from 'styled-components';

export const LoadingOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const LoadingSpinner = styled.div`
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top: 4px solid #ffffff;
  width: 40px;
  height: 40px;
  animation: ${rotate} 1s linear infinite;
`;


export const LoginBackgroundSection = styled.section`
    width: 100vw;
    height: 100vh;
    max-width: 100%;
    max-height: 100%;
    background-color: #E6EBF1;
    @media (max-width: 1280px) {
    background-color: white;
    }
`;

export const LogoContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 320px;
    height: 364px;
    z-index: 2;
`;

export const LogoContent = styled.div`
    text-align: left;
    font-size: 2.4em;
    line-height: 28.8px;
    color: #F7FAFC;
    font-weight: 400;

    & > p:nth-child(2) {
    font-weight: 300;

    }
`;

export const LogoDesktop = styled.img`
    display: block;
`;

export const CenteredContainer = styled.div`
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;


    @media (min-width: 1279px) {
    height: 100vh; 
    }
`;

export const BackgroundContainer = styled.div`
    position: relative;
    display: inline-block;
    width: 640px;
    height: 720px;

    @media (min-width: 1279px) {
    display: block;  
    }

    @media (max-width: 1280px) {
    display: none;
    }
`;

export const ColorOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #1A202CE5;
    z-index: 1;
`;

export const BackgroundImage = styled.img`
    max-width: 100%;
    height: auto;
    z-index: 0;
    width: 640px;
    height: 720px;
`;

export const S = {
  LoginBackgroundSection: LoginBackgroundSection,
  LogoContainer: LogoContainer,
  LogoContent: LogoContent,
  LogoDesktop: LogoDesktop,
  CenteredContainer: CenteredContainer,
  BackgroundContainer: BackgroundContainer,
  ColorOverlay: ColorOverlay,
  BackgroundImage: BackgroundImage,
};