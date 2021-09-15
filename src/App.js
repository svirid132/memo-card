import React from 'react';
import './layout/main.scss'
import { Switch, Route } from 'react-router-dom'
import SwitcherAuthorization from './container/SwitcherAuthorization';
import SwitcherGame from './container/SwitcherGame';

function App() {
  return (
    <Switch>
        <Route path="/" component={SwitcherAuthorization} exact/>
        <Route path="/game" component={SwitcherGame} exact/>
    </Switch> 
  );
}

export default App;
