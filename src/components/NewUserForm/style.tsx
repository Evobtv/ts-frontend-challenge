import styled from "styled-components";

export const Error = styled.p`
  position: absolute;
  bottom: -1.75rem;
  
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.erroMessage};
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  row-gap: 1rem;

  @media screen and (min-width: 728px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    row-gap: 0;
    column-gap: 1rem;
  }
`;



export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  column-gap: 1rem;
  
  margin-top: 5rem;

  @media screen and (min-width: 728px) {
    margin-top: 3rem;
  }
`;


export const LoginMessage = styled.p`
  display: block;
  width: 90%;

  margin: 0 auto;
  padding-top: 2rem;

  text-align: center;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.baseGray};
  font-weight: bold;
`;
