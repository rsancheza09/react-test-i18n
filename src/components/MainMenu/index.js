import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import MyContext from '../../MyContext';
import {
  Collapse,
  Nav,
  Navbar,
  NavItem,
  NavLink,
  NavbarToggler,
} from 'reactstrap';

class MainMenu extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    const { locale } = this.props.match.params;
    const { pathname } = this.props.location;
    return (
      <MyContext.Consumer>
        {
          (context) => {
            const menuItems = [
              {
                id: 1,
                text: context.menuItems[0],
                path: `/${locale}/home`,
                isSelected: pathname === `/${locale}/home`,
              },
              {
                id: 2,
                text: context.menuItems[1],
                path: `/${locale}/register-clinic`,
                isSelected: pathname === `/${locale}/register-clinic`,
              },
            ];
            return (
              <Navbar expand="md" className="pt-0 pb-0">
                <NavbarToggler onClick={ this.toggle } />
                <Collapse isOpen={ this.state.isOpen } navbar className="justify-content-center">
                  <Nav navbar>
                    {menuItems.map((item) => (
                      <NavItem
                        key={ item.id }
                        className={ `${item.isSelected ? 'selected' : ''} pr-5 pl-5` }
                      >
                        <NavLink tag={ Link } to={ item.path }>{item.text}</NavLink>
                      </NavItem>
                    ))}
                  </Nav>
                </Collapse>
              </Navbar>
            );
          }
        }
      </MyContext.Consumer>
    );
  }
}

export default withRouter(MainMenu);
