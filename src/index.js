import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.scss';

import { Provider, initialState, reducer, actions } from './store';
import App from './App';

ReactDOM.render(
    <Provider initialState={initialState} reducer={reducer} actions={actions}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);