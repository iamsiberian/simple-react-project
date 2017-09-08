import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

export default class Content extends React.Component {
  render() {
    return (
      <div className='content'>
        content
        {this.props.children}
      </div>
    );
  }
}

Content.propTypes = {
  children: PropTypes.node,
};