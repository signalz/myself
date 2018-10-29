import React, { Component } from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';

import MyHearder from './components/MyHeader';

const { Footer, Content } = Layout;

class App extends Component {
  render() {
    return (
        <Layout>
          <MyHearder/>
          <Content>Content</Content>
          <Footer>Footer</Footer>
        </Layout>
    );
  }
}

export default App;
