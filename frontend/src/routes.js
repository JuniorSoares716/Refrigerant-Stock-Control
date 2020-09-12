


import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import Listagem from './pages/Listagem';


export default class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>

          <Route path="/" exact component={Home} />
          <Route path="/cadastro" component={Cadastro} />
          <Route path="/listagem" component={Listagem} />

        </Switch>
      </BrowserRouter>

    )
  }
}
