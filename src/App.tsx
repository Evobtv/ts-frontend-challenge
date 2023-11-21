import React from 'react';
import { ThemeProvider } from 'styled-components';
import variables from './assets/styles/themes/variables';
import GlobalStyle from './assets/styles/global';
import Router from './Router';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={variables}>
      <Router />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;