import React from 'react';
import { withRouter } from 'react-router-dom';
import { Translate } from 'react-redux-i18n';
import PropTypes from 'prop-types';

import Locale from '../Locale';

function Header(props) {
  const { onChangeLocale } = props;
  return (
    <header className="d-flex align-items-center pr-3 pl-3">
      <h1><Translate value="appName" /></h1>
      <Locale onChangeLocale={ (e) => onChangeLocale(e.target.value) }/>
    </header>
  );
}

Header.propTypes = {
  onChangeLocale: PropTypes.func.isRequired,
};

export default withRouter(Header);
