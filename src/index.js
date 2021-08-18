import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import {
  BrowserRouter as Router,
  HashRouter
} from "react-router-dom";

ReactDOM.render(
  <Router>
    <HashRouter>
      <App />
    </HashRouter>
  </Router>,
  document.getElementById('root')
);
