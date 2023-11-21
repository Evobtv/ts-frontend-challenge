import styled from 'styled-components';

export const WhatsappLink = styled.a`
  position: fixed;
  width: 60px;
  height: 60px;
  bottom: 40px;
  right: 40px;
  background-color: #25d366;
  color: #fff;
  border-radius: 50px;
  text-align: center;
  font-size: 30px;
  box-shadow: 2px 2px 3px #999;
  z-index: 100;

  transition: 300ms ease-out;

  &:hover {
    transform: scale(1.3)
  }

  @media screen and (max-width: 767px) {
    width: 40px;
    height: 40px;
    bottom: 20px;
    right: 10px;
    font-size: 22px;
  }
`;

export const WhatsappPopUpIcon = styled.i`
  margin-top: 16px;

  @media screen and (max-width: 767px) {
    margin-top: 10px;
  }
`;

