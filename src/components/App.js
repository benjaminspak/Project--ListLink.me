import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import Landing from './Pages/Landing';

class App extends Component {
  render() {
    return (
      <Layout>
        <Route exact path="/" component={Landing} />
      </Layout>
    );
  }
}

export default App;
