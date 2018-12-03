import React, { Component, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import keysIn from 'lodash/keysIn';
import { I18n } from 'react-redux-i18n';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/index.scss';

import Loading from './components/Loading';

import MyContext from './MyContext';

const Home = lazy(() => import('./containers/Home'));
const Clinic = lazy(() => import('./containers/Clinic'));
const Register = lazy(() => import('./containers/Register'));
const NotFound = lazy(() => import('./containers/NotFound'));

class App extends Component {
  render() {
    const localeLabels = I18n.t('localeLabels');
    const { locales, locale, menuItems, termsOfUse, privacyPolicy } = this.props;
    return (
      <div className="App">
        <MyContext.Provider value={ {
          locales,
          locale,
          localeLabels,
          menuItems,
          termsOfUse,
          privacyPolicy,
        } }
        >
          <Suspense fallback={ <Loading /> }>
            <Router>
              <Switch>
                <Route exact path="/:locale(en-us|es-cr)/home" render={ () => <Home /> } />
                <Route path="/:locale(en-us|es-cr)/clinic" render={ () => <Clinic /> } />
                <Route path="/:locale(en-us|es-cr)/register-clinic" render={ () => <Register /> } />
                <Route path="/:locale(en-us|es-cr)/error" render={ () => <NotFound /> } />
                <Redirect from="/" to="/en-us/home" push />
              </Switch>
            </Router>
          </Suspense>
        </MyContext.Provider>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  locales: keysIn(state.i18n.translations),
  locale: state.i18n.locale,
  menuItems: state.i18n.translations[state.i18n.locale].menu,
  termsOfUse: state.i18n.translations[state.i18n.locale].termsOfUse,
  privacyPolicy: state.i18n.translations[state.i18n.locale].privacyPolicy,
});

export default withRouter(connect(mapStateToProps)(App));
