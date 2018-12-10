import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Table, Button } from 'reactstrap';
import { I18n } from 'react-redux-i18n';

class ClinicList extends Component {
  render() {
    return (
      <Table className="clinic-list">
        <tbody>
          {
            this.props.list.map((clinic, key) => (
              <tr key={ key }>
                <td>{ clinic.clinicName }</td>
                <td>{ `${clinic.address.city}, ${clinic.address.country.name}, ${clinic.address.postalCode}` }</td>
                <td>{ clinic.phone }</td>
                <td>
                  <Button
                    tag={ Link }
                    to={ `/${this.props.locale}/clinic` }
                    onClick={ () => this.props.onClinicSelected(key) }
                  >
                    { I18n.t('viewDetails') }
                  </Button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    );
  }
}

ClinicList.propTypes = {
  list: PropTypes.array.isRequired,
  onClinicSelected: PropTypes.func.isRequired,
  locale: PropTypes.string.isRequired,
};

export default ClinicList;
