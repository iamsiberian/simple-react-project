import React from 'react';
import { Link } from 'react-router-dom';
import { get } from '../../utils/fetcher';

import logo from './images/logo.svg';
import './style.css';


export default class App extends React.Component {

  constructor(props) {
    super(props);
    /* You can see the result of this request in dev tools of browser in Network tab */
    get('mockapi/app.json');
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <Link to='/app/nested'>
            Go to '/app/nested'
          </Link>
        </div>
      </div>
    );
  }
}
