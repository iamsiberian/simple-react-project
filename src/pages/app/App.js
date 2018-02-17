import React from 'react';
import { Link } from 'react-router-dom';

import logo from './images/logo.svg';
import './style.scss';


export default class App extends React.Component {

  render() {
    const array = [
      'hello1',
      'hello2',
      'hello3'
    ];

    const test = {
      hello: 'hello'
    };

    const testTest = {
      ...test,
      hello: 'hello1'
    };

    const arrayComp = array.map(item => {
      return <div>{item}</div>
    });

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
          <Link to='/nested'>
            Go to '/nested'
          </Link>
        </div>
        {arrayComp}
      </div>
    );
  }
}
