import styled from "styled-components";

export const Title = styled.h1`
  margin-bottom: 2rem;

  color: ${({ theme }) => theme.colors.baseGray};
  font-size: 2rem;
  font-weight: 300;
  text-align: center;
  
  @media screen and (min-width: 728px) {
    font-size: 3rem;
    text-align: left;
  }
`;