import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import CharactersIndex from './charactersIndex';
import CharacterDetail from './characterDetail';
import ItemDetail from './itemDetail';

export default class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <Switch>
              <Route path="/item/:type/:id" component={ItemDetail} />
              <Route path="/character/:id" component={CharacterDetail} />
              <Route path="/" component={CharactersIndex} />
            </Switch>
        </BrowserRouter>
    );
  }
}
