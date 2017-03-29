import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAppData } from './action';

import logo from './images/logo.svg';
import './style.css';


class App extends React.Component {

  componentDidMount() {
    this.props.getAppData();
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
        <p>{this.props.data}</p>
        <div>
          <Link to='/app/nested'>
            Go to '/app/nested'
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.appCompReducer.data,
  }
};

const mapDispatchToProps = (dispatch) => ({
  getAppData: bindActionCreators(getAppData, dispatch)
  // getAppData: () => { dispatch(getAppData()); }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
