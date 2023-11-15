import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import GlobalStyles from './styles/GlobalStyles';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <h1>Hello</h1>
      <GlobalStyles />
    </ThemeProvider>
  );
}
