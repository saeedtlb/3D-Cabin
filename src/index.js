import React from 'react';
import ReactDOM from 'react-dom';
// main file
import App from './App';
// state management
import { GlobalProvider } from './context/globalContext';

ReactDOM.render(
    <GlobalProvider>
        <App />
    </GlobalProvider>,
    document.getElementById('root')
);
