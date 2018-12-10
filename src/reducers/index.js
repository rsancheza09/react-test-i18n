import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { i18nReducer } from 'react-redux-i18n';
import clinic from './clinic';

export default (history) => combineReducers({
  router: connectRouter(history),
  i18n: i18nReducer,
  clinic,
});
