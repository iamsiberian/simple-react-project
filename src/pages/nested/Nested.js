import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './style.css';

export default class Nested extends React.Component {
  render() {
    return (
      <div className='nested'>
        nested
        <div>
          <Link to='/app'>
            Go to '/app'
          </Link>
        </div>
      </div>
    );
  }
}

Nested.propTypes = {
  children: PropTypes.node,
};