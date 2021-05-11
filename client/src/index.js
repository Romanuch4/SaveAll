import React from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';
import { Provider } from 'react-redux';
import Store from './store/store';
import { BrowserRouter, Switch } from 'react-router-dom';
import App from './App';
import './index.css';

Sentry.init({
  dsn: 'https://fdbd536dff124af2845d522c0e8b873b@o626238.ingest.sentry.io/5754306',
  integrations: [new Integrations.BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

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
