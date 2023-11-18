import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import GlobalStyles from './styles/GlobalStyles';
import router, { RouterPath } from './router';

export default function App() {
  const path = window.location.pathname as RouterPath;

  return (
    <ThemeProvider theme={theme}>
      {router[path] ? router[path]() : router['/404']()}
      <GlobalStyles />
    </ThemeProvider>
  );
}
