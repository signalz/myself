import React, { Component } from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';

import MyHearder from './components/MyHeader';
import MyContent from './components/MyContent';

const { Footer } = Layout;

class App extends Component {
  render() {
    return (
        <Layout>
          <MyHearder/>
          <MyContent/>
          <Footer>Footer</Footer>
        </Layout>
    );
  }
}

export default App;
