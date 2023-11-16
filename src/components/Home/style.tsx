import styled from 'styled-components';

export const HomeContainer = styled.section`
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: 1fr;

  min-height: 100vh;

  @media screen and (min-width: 728px) {
    grid-template-columns: 1fr 1fr;
  }
`;
