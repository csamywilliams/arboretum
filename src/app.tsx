import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import Dashboard from './container/dashboard/Dashboard';
import './index.css';
import theme from './theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Dashboard />
      </>
    </ThemeProvider>
  );
};

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);
