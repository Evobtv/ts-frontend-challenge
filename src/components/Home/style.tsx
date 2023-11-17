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