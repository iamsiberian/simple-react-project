import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './style.scss';

export default class Nested extends React.Component {
  render() {
    return (
      <div className='nested'>
        nested
        <div>
          <Link to='/'>
            Go to '/'
          </Link>
        </div>
      </div>
    );
  }
}

Nested.propTypes = {
  children: PropTypes.node
};