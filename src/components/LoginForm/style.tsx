import styled from 'styled-components';


export const Title = styled.h1`
  margin-bottom: 2rem;
  
  text-align: center;
  font-weight: 300;
  font-size: 2rem;
  color: #2d3748;
  
  @media screen and (min-width: 728px) {
    font-size: 3rem;
    text-align: left;
  }
`;

export const Field = styled.div`
  position: relative;

  max-width: 400px;
  margin-bottom: 3rem;
`;

interface InputContainerProps {
  typeErrorMessage: string;
}

export const InputContainer = styled.label<InputContainerProps>`
  display: flex;
  justify-content: space-between;
  
  padding: 0.25rem 0;
  padding-right: 5px;

  border-bottom: 2px solid #2d3748;
  border-color: ${(props) => (props.typeErrorMessage ? '#F56565' : '#2d3748')};
`;

interface InputProps {
  typeErrorMessage: string;
}

export const Input = styled.input<InputProps>`
  display: block;
  width: 90%;

  background-color: transparent;
  border: 0;
  outline: 0;

  color: ${(props) => (props.typeErrorMessage ? '#F56565' : '#2d3748')};
  font-family: 'Lato', sans-serif;
  font-size: 1.25rem;

  &::placeholder {
    color: #a0aec0;
  }
`;

export const Error = styled.p`
  color: #f56565;
  font-size: 1rem;

  position: absolute;
  bottom: -1.75rem;
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

  padding: 10px 2rem;

  background-color: #2d3748;
  border: 0;

  color: #fff;
  font-size: 1.25rem;

  cursor: pointer;
`;

export const ForgotButton = styled.button`
  display: block;

  border: 0;
  background-color: transparent;

  text-decoration: underline;
  font-size: 1rem;
  color: #2d3748;

  cursor: pointer;
`;

export const OptionsContainer = styled.div`
  display: flex;

  margin-top: 5rem;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 1rem;

  @media screen and (min-width: 728px) {
    margin-top: 3rem;
  }
`;

export const New = styled.button`
  display: block;

  background-color: transparent;
  border: 0;

  font-size: 1rem;
  color: #2d3748;

  cursor: pointer;
`;

export const Register = styled.button`
  display: block;

  border: 2px solid #2d3748;
  padding: 10px 2rem;
  width: 100%;

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
