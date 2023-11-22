import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;

  padding: 3rem 0;
  
  place-content: center;

  @media screen and (min-width: 728px) {
    height: 100%;
    min-height: 100vh;
    width: 100%;
    padding: 0 1rem;

    background-image: url("/img/bg-banner.png");
    background-position: center;
    background-size: cover;
    
    position: relative;
    
    
    &::after {
      position: absolute;
      content: "";
      inset: 0;
      background-color: rgba(26, 32, 44, 0.9);
    }
  }
`;

export const Logo = styled.img`
  display: block;
  position: relative;
  z-index: 1;
  
  max-width: 260px;
  width: 100%;
  height: auto;
  
  object-fit: contain;
  object-position: center;
  
  @media screen and (min-width: 728px) {
    margin-bottom: 2rem;
  }
`;

export const SubTitle = styled.p`
  display: none;
  
  max-width: 450px;
  position: relative;
  z-index: 1;
  
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.white};

  @media screen and (min-width: 728px) {
    display: block;
  }
`;

export const Slogan = styled.p`
  display: none;
  position: relative;
  z-index: 1;
  
  max-width: 450px;
  
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 300;

  @media screen and (min-width: 728px) {
    display: block;
    margin: 2rem 0;
  }
`;

export const CallAction = styled.button`
  display: none;
  position: relative;
  z-index: 1;
  max-width: 450px;
  
  border: 0;
  background-color: transparent;
  
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.white};
  text-align: left;

  @media screen and (min-width: 728px) {
    display: block;
  }
`;
