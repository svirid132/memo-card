import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import './layout/main.scss'
import {FieldGame} from "./components/index"
import {Game, MenuGame} from "./pages/index"
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Switch>
        <Route path="/" component={MenuGame} exact/>
        <Route path="/game" component={Game} />
    </Switch> 
  );
}

export default App;
