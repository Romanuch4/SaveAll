import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Store from './store/store';
import { BrowserRouter, Switch } from 'react-router-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={Store}>
      <Switch>
        <App />
      </Switch>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'),
);
