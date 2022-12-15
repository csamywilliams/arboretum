import React from 'react';
import ReactDOM from 'react-dom';
// import Dashboard from 'components/dashboard';
import theme from './theme';
import { ThemeProvider } from 'styled-components';
import './index.css';

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <>
                {/* <Dashboard /> */} hi
            </>
        </ThemeProvider>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
