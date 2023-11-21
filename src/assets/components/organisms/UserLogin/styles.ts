import styled, { css } from 'styled-components';
import theme from '../../../styles/themes/variables';

interface StyledComponentProps {
  $signUpStep?: boolean;
  $formStep?: string;
  $flexDirection?: string;
}

export const fadeInOutAnimation = css`
  @keyframes fadeInOut {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  animation: fadeInOut 0.3s ease-in-out;
`;

export const MaxWidthDiv = styled.div`
  margin: 0 auto;
  max-width: 320px;
`;

export const Form = styled.form<StyledComponentProps>`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1<StyledComponentProps>`
  font-size: 3.6em;
  font-weight: 300;
  line-height: 43.2px;
  transition: opacity 0.5s ease-in-out;
  text-align: left;
  margin-left: 27.5px;
  margin-top: 76px;
  margin-bottom: 50px;
  ${({ $signUpStep }) =>
    $signUpStep &&
    css`
      margin-top: 33px;
  `}

  ${({ $formStep }) =>
    $formStep === 'forgot-password' &&
    css`
      margin-left: unset;
  `}
`;

export const ButtonLinkContainer = styled.div<StyledComponentProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 320px;
  width: 100%;
  margin-top: 14px;

  ${({ $flexDirection }) =>
    $flexDirection === 'row' &&
    css`
      flex-direction: row;
  `}
`;

export const AdditionalButtonLinkContainer = styled(ButtonLinkContainer)`
  max-width: 320px;
  width: 100%;
  margin-top: 123px;
  padding-bottom: 40px;
`;

export const Link = styled.a`
  width: 100%;
  height: 40px;
  display: flex;
  font-size: 1.4em;
  align-items: center;
  text-decoration: underline;
  cursor: pointer;
  transition: color 0.3s ease-in-out, filter 0.3s ease-in-out;
  justify-content: unset;
  width: unset;

  &:hover {
    color: ${theme.colors.black};
    filter: brightness(1.2);
  }
`;

export const Span = styled.span`
  width: 100%;
  height: 40px;
  display: flex;
  font-size: 1.4em;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.img`
  margin: 55px auto 20px auto;
  display: block;
  max-width: 100%;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  max-width: 320px;
  width: 100%;
  ${fadeInOutAnimation}
`;

export const Description = styled.p`
  font-size: 1.4em;
`;

export const SuccessMessage = styled.p`
  @media (min-width: 1280px) {
    margin-bottom: 200px;
  }

`;

export const ResponsiveContainer = styled.div<StyledComponentProps>`
  width: 100%;
  max-width: 640px;
  height: 720px;
  background-color: ${theme.colors.white};
  @media (min-width: 1280px) {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 640px;
    height: 720px;
  
    ${MaxWidthDiv} {
      width: 100%;
      background-color: ${theme.colors.white};
    }

    ${Form} {
      justify-content: center;
      align-items: center;
      margin: 0 auto;
      
      ${({ $formStep }) =>
      $formStep === 'forgot-password' &&
      css`
        margin-bottom: 50px;
      `}
    }
  
    ${Logo} {
      display: none;
    }
  
    ${AdditionalButtonLinkContainer} {
      margin: 32px auto;
    }
  
    ${Title} {
      margin-left: unset;
      text-align: left;
  
    ${ButtonLinkContainer} {
      flex-direction: row-reverse;
    }
  
    ${AdditionalButtonLinkContainer} {
      flex-direction: column;
      width: 180px;
    }
  
    ${Span} {
      width: 100%;
    }
  
    ${Link} {
      width: 100%;
    }
  }
`;

export const S = {
  ButtonLinkContainer,
  AdditionalButtonLinkContainer,
  Span,
  Logo,
  ResponsiveContainer,
  InputGroup,
  Title,
  Form,
  MaxWidthDiv,
  fadeInOutAnimation,
  Description,
  SuccessMessage,
};