import React from 'react';

import './style.css';

export default class Layout extends React.Component {
  render() {
    return (
      <div className='layout'>
        layout
        {this.props.children}
      </div>
    );
  }
}

Layout.propTypes = {
  children: React.PropTypes.node
};