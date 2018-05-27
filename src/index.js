import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import reducers from './reducers';
import CharactersIndex from './components/charactersIndex';
import CharacterDetail from "./components/characterDetail";
import ItemDetail from "./components/itemDetail";
import async from './middlewares/async';



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, {}, composeEnhancers(applyMiddleware(async)));

ReactDOM.render(
  <Provider store={store}>
      <BrowserRouter>
          <div>
              <Switch>
                  <Route path="/item/:type/:id" component={ItemDetail} />
                  <Route path="/character/:id" component={CharacterDetail} />
                  <Route path="/" component={CharactersIndex} />
              </Switch>
          </div>
      </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
