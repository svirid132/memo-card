import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
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
=======
import './index.css';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import {
  BrowserRouter as Router
} from "react-router-dom";

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);
>>>>>>> cabde82cd3109b689791deeeafb923fff13298ee
