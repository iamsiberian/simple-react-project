import React from 'react';
import { Link } from 'react-router-dom';

import NavMenu from '../navMenu/NavMenu';

import logo from './images/logo_header.png';
import logo2x from './images/logo_header@2x.png';
import './style.scss';

export default class Header extends React.Component {
  render() {
    return (
      <header className='header'>
        <Link className='header__logo' to='/'>
          <img srcSet={`${logo} 1x, ${logo2x} 2x`} alt='Palo Alto' />
        </Link>
        <NavMenu classes='header__nav nav_theme_dark' />
      </header>
    );
  }
}