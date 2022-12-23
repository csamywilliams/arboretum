import { createRoot } from 'react-dom/client';
import Dashboard from './container/dashboard/dashboard';
import theme from './theme';
import { ThemeProvider } from 'styled-components';
import './index.css';

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
