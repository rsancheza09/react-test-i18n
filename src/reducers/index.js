import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { i18nReducer } from 'react-redux-i18n';
import counter from './counter';

export default (history) => combineReducers({
  router: connectRouter(history),
  i18n: i18nReducer,
  counter,
});
