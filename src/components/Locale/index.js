import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MyContext from '../../MyContext';
import indexOf from 'lodash/indexOf';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';

class Locale extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
    };
  }

  toggle() {
    this.setState((prevState) => ({
      dropdownOpen: !prevState.dropdownOpen,
    }));
  }

  render() {
    return (
      <MyContext.Consumer>
        {
          (context) => {
            const index = indexOf(context.locales, context.locale);
            return (
              <Dropdown
                isOpen={ this.state.dropdownOpen }
                toggle={ this.toggle }
                value={ context.locale }
              >
                <DropdownToggle caret>
                  { context.localeLabels[index] }
                </DropdownToggle>
                <DropdownMenu>
                  {
                    context.locales.map((item, key) => (
                      <DropdownItem
                        onClick={ this.props.onChangeLocale }
                        value={ item }
                        key={ key }
                      >{context.localeLabels[key]}</DropdownItem>
                    ))
                  }
                </DropdownMenu>
              </Dropdown>
            );
          }
        }
      </MyContext.Consumer>
    );
  }
}

Locale.propTypes = {
  onChangeLocale: PropTypes.func.isRequired,
};

export default Locale;
