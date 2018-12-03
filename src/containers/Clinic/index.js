import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { I18n } from 'react-redux-i18n';

import Layout from '../Layout';

class Clinic extends Component {
  render() {
    if (this.props.clinicSelected === '') {
      return <Redirect to={ `/${this.props.locale}/home` } push />;
    }
    const clinic = this.props.clinics[this.props.clinicSelected];
    return (
      <Layout>
        <div className="clinic pt-4">
          <Row>
            <Col md="12"><h2 className="mb-4">{ clinic.clinicName }</h2></Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col md="4"><strong>{ I18n.t('clinicPageLabels.city') }</strong></Col>
            <Col md="4">{ clinic.address.city }</Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col md="4"><strong>{ I18n.t('clinicPageLabels.country') }</strong></Col>
            <Col md="4">{ clinic.address.country.name }</Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col md="4"><strong>{ I18n.t('clinicPageLabels.postalCode') }</strong></Col>
            <Col md="4">{ clinic.address.postalCode }</Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col md="4"><strong>{ I18n.t('clinicPageLabels.phoneNumber') }</strong></Col>
            <Col md="4">{ clinic.phone }</Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col md="4"><strong>{ I18n.t('clinicPageLabels.clinicWebsite') }</strong></Col>
            <Col md="4">{ clinic.clinicWebsite }</Col>
          </Row>
        </div>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => ({
  locale: state.i18n.locale,
  clinicSelected: state.clinic.clinicSelected,
  clinics: state.i18n.translations[state.i18n.locale].clinics,
});

export default connect(mapStateToProps)(Clinic);
