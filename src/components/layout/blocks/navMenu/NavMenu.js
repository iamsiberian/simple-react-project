import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import './style.scss';
import Button from "../../../../components/button/Button";

export default class NavMenu extends React.Component {
  render() {
    return (
      <nav className={`nav ${this.props.classes}`}>
        <ul className='nav__menu'>
          <li className='nav__item'>
            <NavLink exact className='nav__link' activeClassName='nav__link_active' to='/'>
              Home
            </NavLink>
          </li>
          <li className='nav__item'>
            <NavLink exact className='nav__link' activeClassName='nav__link_active' to='/about'>
              About
            </NavLink>
          </li>
        </ul>
        <Link className='nav__search' to='/' />
      </nav>
    );
  }
}

Button.propTypes = {
  classes: PropTypes.string
};