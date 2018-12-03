import React, { Component } from 'react';
import autobind from 'react-autobind';
import { Row, Col, Input, Form, FormGroup, Label, Button, FormFeedback } from 'reactstrap';
import { Translate } from 'react-redux-i18n';
import { connect } from 'react-redux';

import Layout from '../Layout';
import MyContext from '../../MyContext';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisabled: true,
      clinicName: '',
      address: '',
      city: '',
      phoneNumber: '',
      clinicWebsite: '',
      chooseFileLabel: '',
      isClinicWebsiteInvalid: false,
    };
    autobind(this);
  }
  validateForm() {
    const {
      clinicName,
      address,
      city,
      phoneNumber,
      clinicWebsite,
      chooseFileLabel,
    } = this.state;
    if (
      clinicName &&
      address &&
      city &&
      phoneNumber &&
      clinicWebsite &&
      chooseFileLabel
    ) {
      this.setState({
        isDisabled: false,
      });
    }
  }
  onPhoneNumberChange(e) {
    this.setState({
      phoneNumber: e.target.validity.valid ? e.target.value : this.state.phoneNumber,
    });
  }
  onInputChange(e) {
    if (e.target.name === 'clinicWebsite') {
      if (!/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/.test(e.target.value)) { // eslint-disable-line
        return this.setState({
          isClinicWebsiteInvalid: true,
          [e.target.name]: e.target.value,
        });
      }
      return this.setState({
        isClinicWebsiteInvalid: false,
        [e.target.name]: e.target.value,
      });
    }
    return this.setState({
      [e.target.name]: e.target.value,
    }, () => this.validateForm());
  }
  onFormSubmit(e) {
    e.preventDefault();
    console.log('SUBMIT FORM');
  }
  render() {
    return (
      <MyContext.Consumer>
        {
          (context) => {
            const termsOfUse = `<a href="${context.termsOfUse.href}">${context.termsOfUse.cta}</a>`;
            const privacyPolicy = `<a href="${context.privacyPolicy.href}">${context.privacyPolicy.cta}</a>`;
            return (
              <Layout>
                <Row className="justify-content-md-center">
                  <Col md="6">
                    <div className="register pt-5">
                      <Form onSubmit={ this.onFormSubmit }>
                        <FormGroup row>
                          <Label for="clinicName" sm={ 4 }><Translate value="registerForm.clinicName" />:</Label>
                          <Col sm={ 8 }>
                            <Input
                              type="text"
                              name="clinicName"
                              id="clinicName"
                              maxLength="30"
                              value={ this.state.clinicName }
                              onChange={ this.onInputChange }
                            />
                          </Col>
                        </FormGroup>
                        <FormGroup row>
                          <Label for="address" sm={ 4 }><Translate value="registerForm.address" />:</Label>
                          <Col sm={ 8 }>
                            <Input
                              type="textarea"
                              name="address"
                              id="address"
                              value={ this.state.address }
                              onChange={ this.onInputChange }
                            />
                          </Col>
                        </FormGroup>
                        <FormGroup row>
                          <Label for="city" sm={ 4 }><Translate value="registerForm.city" />:</Label>
                          <Col sm={ 8 }>
                            <Input
                              type="text"
                              name="city"
                              id="city"
                              maxLength="20"
                              value={ this.state.city }
                              onChange={ this.onInputChange }
                            />
                          </Col>
                        </FormGroup>
                        <FormGroup row>
                          <Label for="phoneNumber" sm={ 4 }><Translate value="registerForm.phoneNumber" />:</Label>
                          <Col sm={ 8 }>
                            <Input
                              type="text"
                              name="phoneNumber"
                              id="phoneNumber"
                              pattern="[0-9]*"
                              onChange={ this.onPhoneNumberChange }
                              value={ this.state.phoneNumber }
                            />
                          </Col>
                        </FormGroup>
                        <FormGroup row>
                          <Label for="clinicWebsite" sm={ 4 }><Translate value="registerForm.clinicWebsite" />:</Label>
                          <Col sm={ 8 }>
                            <Input
                              type="text"
                              name="clinicWebsite"
                              id="clinicWebsite"
                              value={ this.state.clinicWebsite }
                              onChange={ this.onInputChange }
                              invalid={ this.state.isClinicWebsiteInvalid }
                            />
                            <FormFeedback>Invalid url</FormFeedback>
                          </Col>
                        </FormGroup>
                        <FormGroup row>
                          <Label for="chooseFileLabel" sm={ 4 }><Translate value="registerForm.clinicLogo" />:</Label>
                          <Col sm={ 8 }>
                            <Input
                              type="file"
                              name="chooseFileLabel"
                              id="chooseFileLabel"
                              accept=".jpg, .png"
                              onChange={ this.onInputChange }
                              value={ this.state.chooseFileLabel }
                            />
                          </Col>
                        </FormGroup>
                        <Button color="primary" disabled={ this.state.isDisabled }><Translate value="registerForm.submit" /></Button>
                      </Form>
                    </div>
                  </Col>
                </Row>
                <Row className="justify-content-md-center pt-3 pb-3">
                  <Col md="6">
                    <Translate
                      value="disclaimer"
                      dangerousHTML
                      termsOfUse={ termsOfUse }
                      privacyPolicy={ privacyPolicy }
                    />
                  </Col>
                </Row>
              </Layout>
            );
          }
        }
      </MyContext.Consumer>
    );
  }
}

export default connect()(Register);
