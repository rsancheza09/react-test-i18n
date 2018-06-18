import React from 'react';
import { Route } from 'react-router-dom';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from './store';
import registerServiceWorker from './registerServiceWorker';
import App from './App';

import withTracker from './utils/withTracker';

import 'semantic-ui-css/semantic.min.css';
import './style/index.css';

const target = document.querySelector('#root');

render(
  <Provider store={ store }>
    <ConnectedRouter history={ history }>
      <div>
        <Route component={ withTracker(App, {}) } />
      </div>
    </ConnectedRouter>
  </Provider>,
  target
);
registerServiceWorker();
