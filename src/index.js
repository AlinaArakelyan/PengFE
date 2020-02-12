// import React from 'react';
// import ReactDOM from 'react-dom';
// import rootReducer from './redux/rootReducer';
// import { createStore, applyMiddleware } from 'redux';
// import { Provider } from 'react-redux';
// import thunk from 'redux-thunk';
// import App from './App';

import React, { useEffect } from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'

//REDUCERS
import post from './redux/postReducer'
import login from './redux/loginReducer'


const rootReducer = combineReducers({
    login: login,
    post: post

  })

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))


ReactDOM.render(
    
    <Provider store={store}>
    <Router>
        <App>
        </App>
    </Router>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();