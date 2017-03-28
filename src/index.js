import React from 'react';
import ReactDOM from 'react-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom';

import App from './pages/app/App';
import Nested from './pages/nested/Nested';
import Layout from './containers/layout/Layout';
import Content from './containers/content/Content';

import './index.css';

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <Layout>
      <Content>
        <Redirect exact from='/' to='/app' />
        <Route exact path='/app' component={App} />
        <Route exact path='/app/nested' component={Nested} />
      </Content>
    </Layout>
  </Router>,
  document.getElementById('root')
);
