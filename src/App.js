import React from 'react';
<<<<<<< HEAD
import './layout/main.scss'
import { Switch, Route } from 'react-router-dom'
import SwitcherAuthorization from './container/SwitcherAuthorization';
import SwitcherGame from './container/SwitcherGame';
=======
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import './layout/main.scss'
import {FieldGame} from "./components/index"
import {Game, MenuGame} from "./pages/index"
import { Switch, Route } from 'react-router-dom'
>>>>>>> cabde82cd3109b689791deeeafb923fff13298ee

function App() {
  return (
    <Switch>
<<<<<<< HEAD
        <Route path="/" component={SwitcherAuthorization} exact/>
        <Route path="/game" component={SwitcherGame} exact/>
=======
        <Route path="/" component={MenuGame} exact/>
        <Route path="/game" component={Game} />
>>>>>>> cabde82cd3109b689791deeeafb923fff13298ee
    </Switch> 
  );
}

export default App;
