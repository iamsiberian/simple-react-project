import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createBrowserHistory from 'history/createBrowserHistory';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
} from 'react-router-dom';

import { newStore } from './stores/store';

import App from './pages/app/App';
import Nested from './pages/nested/Nested';
import Layout from './containers/layout/Layout';
import Content from './containers/content/Content';

import './index.css';

const history = createBrowserHistory();
const store = newStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Layout>
        <Content>
          <Redirect exact from='/' to='/app' />
          <Route exact path='/app' component={App} />
          <Route exact path='/app/nested' component={Nested} />
        </Content>
      </Layout>
    </Router>
  </Provider>,
  document.getElementById('root')
);
