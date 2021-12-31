import React from 'react';
import { render } from 'react-dom';
import App from './App';
import './main.scss';

import { BrowserRouter } from 'react-router-dom'

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import reducers from './reducers'

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))

render(
<Provider store={store}>
    <BrowserRouter><App /></BrowserRouter>
</Provider>, document.getElementById('root'))