import Home from './components/Home';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
