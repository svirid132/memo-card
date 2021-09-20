import React from 'react';
import ReactDOM from 'react-dom';
import { store } from './app/store';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  HashRouter
} from "react-router-dom";
import {loadCardInfos} from "./components/FieldGame/fieldGameSlice";
import "./layout/main.scss";
import App from './App';

store.dispatch(loadCardInfos());

ReactDOM.render(
  <Router>
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  </Router>,
  document.getElementById('root')
);
