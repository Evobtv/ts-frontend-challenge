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

export const Button = styled.button`
  display: block;
  width: 100%;

  background-color: #2d3748;
  border: 0;
  padding: 10px 2rem;

  color: #fff;
  font-size: 1.25rem;

  cursor: pointer;
`;

export const Message = styled.div`
  margin-top: 20px;
  color: #333;
  font-size: 16px;
`;

export const ButtonReturnLogin = styled.button`
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
