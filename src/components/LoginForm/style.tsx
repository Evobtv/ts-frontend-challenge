import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 728px) {
    justify-content: center;
    align-items: center;
  }
`;

export const Container = styled.div`
  width: 90%;
  max-width: 420px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #2d3748;
  font-weight: 300;
  text-align: center;
  @media screen and (min-width: 728px) {
    font-size: 3rem;
    text-align: left;
  }
`;

export const Form = styled.form``;

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
  border-color: ${(props) => (props.typeErrorMessage ? "#F56565" : "#2d3748")};
`;

interface InputProps {
  typeErrorMessage: string;
}

export const Input = styled.input<InputProps>`
  display: block;
  font-family: "Lato", sans-serif;
  font-size: 1.25rem;
  background-color: transparent;
  color: ${(props) => (props.typeErrorMessage ? "#F56565" : "#2d3748")};
  width: 90%;
  border: 0;
  outline: 0;

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
  background-color: #2d3748;
  border: 0;
  padding: 10px 2rem;
  color: #fff;
  font-size: 1.25rem;
  cursor: pointer;
`;

export const ForgotButton = styled.button`
  display: block;
  font-size: 1rem;
  color: #2d3748;
  text-decoration: underline;
  background-color: transparent;
  border: 0;
  cursor: pointer;
`;

export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 1rem;
  margin-top: 5rem;

  @media screen and (min-width: 728px) {
    margin-top: 3rem;
  }
`;

export const New = styled.button`
  display: block;
  font-size: 1rem;
  color: #2d3748;
  border: 0;
  background-color: transparent;
  cursor: pointer;
`;

export const Register = styled.button`
  display: block;
  border: 2px solid #2d3748;
  padding: 10px 2rem;
  width: 100%;
  color: #2d3748;
  background-color: transparent;
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
  text-align: center;
  font-size: 2rem;
  color: #2d3748;
  font-weight: bold;
  padding-top: 2rem;
`;
