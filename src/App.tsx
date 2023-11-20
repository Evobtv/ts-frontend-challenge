import React from 'react';
import { ThemeProvider } from 'styled-components';
import variables from './assets/styles/themes/variables';
import GlobalStyle from './assets/styles/global';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={variables}>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;