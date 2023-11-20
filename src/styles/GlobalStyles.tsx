import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :root {
    scroll-behavior: smooth;
    font-size: 62.5%;
  }

  body {
    color: ${props => props.theme.colors.gray[800]};
    font-family: ${props => props.theme.fonts.body}, sans-serif;
    font-size: 1.6rem;
  }

  #root {
    min-height: 100vh;
  }

  button,
  input,
  textarea {
    background: transparent;
    border: none;
    color: inherit;
    font-family: inherit;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ol,
  ul {
    list-style: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  a,
  ul {
    font-size: 1em;
    font-weight: normal;
  }


  img {
    display: block;
    max-width: 100%;
  }
`;
