import React from 'react';
import { Link } from 'react-router-dom';

import NavMenu from '../navMenu/NavMenu';

import logo from './images/logo_footer.png';
import logo2x from './images/logo_footer@2x.png';
import './style.scss';

export default class Footer extends React.Component {
  render() {
    return (
      <footer className='footer'>
        <Link className='footer__logo' to='/'>
          <img srcSet={`${logo} 1x, ${logo2x} 2x`} alt='Palo Alto' />
        </Link>
        <NavMenu classes='footer__nav nav_theme_light' />
        <p className='footer__text'>
          Nunc placerat dolor at lectus hendrerit dignissim. Ut tortor sem, consectetur nec hendrerit ut, ullamcorper ac odio. Donec viverra ligula at quam tincidunt imperdiet. Nulla mattis tincidunt auctor.
        </p>
        <p className='footer__copyright'>
          &copy; 2015 - Palo Alto. All Rights Reserved. Designed & Developed by <Link className='footer__dev' to='/'>PixelBuddha Team</Link>
        </p>
        <ul className='social'>
          <li className='social__item'>
            <Link className='social__link social__link_facebook' to='/' />
          </li>
          <li className='social__item'>
            <Link className='social__link social__link_twitter' to='/' />
          </li>
          <li className='social__item'>
            <Link className='social__link social__link_instagram' to='/' />
          </li>
          <li className='social__item'>
            <Link className='social__link social__link_pinterest' to='/' />
          </li>
        </ul>
      </footer>
    );
  }
}