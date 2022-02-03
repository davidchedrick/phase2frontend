import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import { BrowserRouter as Router } from 'react-router-dom';
import { UserProvider } from './context/user';

import 'bootstrap/dist/css/bootstrap.css';


ReactDOM.render(
    <Router>
        <UserProvider>
            <App />
        </UserProvider>
    </Router>, 
    document.getElementById('root')
);


