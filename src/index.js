import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';

import Home from './app/home/Home';
import About from './app/about/About';
import Layout from './components/layout/Layout';

import './index.scss';

ReactDOM.render(
  <BrowserRouter>
    <Layout>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
    </Layout>
  </BrowserRouter>,
  document.getElementById('root')
);
