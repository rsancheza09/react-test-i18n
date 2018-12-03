import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import Layout from '../Layout';
import ClinicList from '../../components/ClinicList';

import { viewClinicDetails } from '../../actions/clinic';

class Home extends Component {
  constructor(props) {
    super(props);
    this.onClinicSelected = this.onClinicSelected.bind(this);
  }
  onClinicSelected(clinicId) {
    this.props.viewClinicDetails(clinicId);
  }
  render() {
    return (
      <Layout>
        <ClinicList
          locale={ this.props.match.params.locale }
          list={ this.props.clinics }
          onClinicSelected={ this.onClinicSelected }
        />
      </Layout>
    );
  }
}

const mapStateToProps = (state) => ({
  clinics: state.i18n.translations[state.i18n.locale].clinics,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  viewClinicDetails,
}, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
