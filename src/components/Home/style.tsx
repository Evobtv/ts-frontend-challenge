import styled from 'styled-components';

export const HomeContainer = styled.section`
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: 1fr;

  min-height: 100vh;
  overflow-x: hidden;

  @media screen and (min-width: 728px) {
    grid-template-columns: 1fr 1fr;
  }

  @keyframes smoothOpacityChange {
    from {
      opacity: 0.3;
    }
    to {
      opacity: 1;
    }
  }
  
  * {
    animation: smoothOpacityChange 0.4s ease-in-out;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media screen and (min-width: 728px) {
    align-items: center;
    justify-content: center;
  }
`;

export const Container = styled.div`
  width: 90%;
  max-width: 420px;
  margin: 0 auto;
`;
