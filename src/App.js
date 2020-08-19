import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

import Layout from './components/Layout/Layout';

import Routes from './Routes';

const App = () => (
  <Layout>
    <Router>
      <Routes />
    </Router>
  </Layout>
);

export default App;
