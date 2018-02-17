import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';

import App from './pages/app/App';
import Nested from './pages/nested/Nested';
import Layout from './containers/layout/Layout';
import Content from './containers/content/Content';

import './index.scss';

ReactDOM.render(
  <BrowserRouter>
    <Layout>
      <Content>
        <Route exact path='/' component={App} />
        <Route exact path='/nested' component={Nested} />
      </Content>
    </Layout>
  </BrowserRouter>,
  document.getElementById('root')
);
