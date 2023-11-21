import { createGlobalStyle } from 'styled-components'
import 'typeface-lato';

export default createGlobalStyle`
* {
    box-sizing: border-box;
  }
  
  #root {
    width: 100%;
    min-height: 100vh;
    padding: 0;
    margin: 0;
    font-size: 62.5%;
  }
  
  html,body {
    width: 100%;
    min-height: 100%;
    padding: 0;
    margin: 0;
    font-family: "Lato", sans-serif;
  }
`;



