import styled from "styled-components";

interface InputProps {
  typeErrorMessage: string;
}

export const Input = styled.input<InputProps>`
  display: block;
  width: 90%;

  background-color: transparent;
  border: 0;
  outline: 0;
  
  font-family: "Lato", sans-serif;
  font-size: 1.25rem;
  color: ${(props) => (props.typeErrorMessage ? "#F56565" : "#2d3748")};

  &::placeholder {
    color: #a0aec0;
  }
`;

export const Error = styled.p`
  position: absolute;
  bottom: -1.75rem;
  
  font-size: 1rem;
  color: #f56565;
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

export const LoginButton = styled.button`
  display: block;
  width: 100%;

  background-color: #2d3748;
  border: 0;
  padding: 10px 2rem;
  
  color: #fff;
  font-size: 1.25rem;
  
  cursor: pointer;
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

export const New = styled.button`
  display: block;

  border: 0;
  background-color: transparent;
  
  font-size: 1rem;
  color: #2d3748;
  
  cursor: pointer;
`;

export const Register = styled.button`
  display: block;
  width: 50%;
  
  border: 2px solid #2d3748;
  padding: 10px 1rem;
  
  background-color: transparent;
  
  color: #2d3748;
  font-size: 1.25rem;
  
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: #efefef;
  }

  @media screen and (min-width: 728px) {
    width: initial;
  }
`;

export const LoginMessage = styled.p`
  display: block;
  width: 90%;

  margin: 0 auto;
  padding-top: 2rem;

  text-align: center;
  font-size: 2rem;
  color: #2d3748;
  font-weight: bold;
`;
