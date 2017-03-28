import React from 'react';

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
  children: React.PropTypes.node
};