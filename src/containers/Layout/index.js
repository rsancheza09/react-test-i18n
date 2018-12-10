import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import _ from 'lodash';
import { Container, Row, Col } from 'reactstrap';

import Header from '../../components/Header';
import { changeLocale } from '../../actions/translate';
import MainMenu from '../../components/MainMenu';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.props.changeLocale(props.match.params.locale);
  }
  onChangeLocale(locale) {
    this.props.changeLocale(locale);
    const path = _.chain(this.props.location.pathname)
      .split('/')
      .slice(2)
      .value();
    const fullPath = `/${locale}/${path}`;
    this.props.push(fullPath);
  }
  render() {
    const { locale } = this.props.match.params;
    if (!/^(en-us)|(es-cr)$/g.test(locale)) {
      this.props.changeLocale('en-us');
      return <Redirect to="/en-us/error" push />;
    }
    return (
      <Container fluid className="main-layout pr-0 pl-0">
        <Row>
          <Col md="12">
            <Header onChangeLocale={ (locale) => this.onChangeLocale(locale) } />
          </Col>
        </Row>
        <Row className="no-gutters">
          <Col md="12">
            <MainMenu />
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <Container>
              {this.props.children}
            </Container>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  changeLocale,
  push,
}, dispatch);

export default withRouter(connect(null, mapDispatchToProps)(Layout));
