import React, { Component } from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';

import MyHeader from './components/MyHeader';
import MyContent from './components/MyContent';

const {
  Footer,
} = Layout;

class App extends Component {
  render() {
    return (
      <Layout>
        <MyHeader />
        <MyContent/>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    );
  }
}

export default App;
