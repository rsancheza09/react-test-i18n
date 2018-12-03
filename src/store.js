import { createBrowserHistory } from 'history';
import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import {
  loadTranslations,
  setLocale,
  syncTranslationWithStore,
} from 'react-redux-i18n';
import thunk from 'redux-thunk';
import createRootReducer from './reducers';

import en from './i18n/en.json';
import es from './i18n/es.json';

const translationsObject = { 'en-us': en, 'es-cr': es };

export const history = createBrowserHistory();

const initialState = {};

const enhancers = [];
const middleware = [
  thunk,
  routerMiddleware(history),
];

if (process.env.NODE_ENV === 'development') {
  const { devToolsExtension } = window;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);

const store = createStore(
  createRootReducer(history),
  initialState,
  composedEnhancers
);

syncTranslationWithStore(store);
store.dispatch(loadTranslations(translationsObject));
store.dispatch(setLocale('en-us'));

export default store;
