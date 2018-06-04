import React from 'react';
import reducers from '../reducers';
import async from '../middlewares/async';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';


export default props => {

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(reducers, {}, composeEnhancers(applyMiddleware(async)));

    return (
        <Provider store={store}>
        {props.children}
        </Provider>
    );
}