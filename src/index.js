import React from 'react';
<<<<<<< HEAD
import {Route} from 'react-router-dom';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'react-router-redux';
import store, {history} from './store';
import registerServiceWorker from './registerServiceWorker';
import App from './App';

import withTracker from './utils/withTracker';

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
=======
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
>>>>>>> Initial commit from Create React App
