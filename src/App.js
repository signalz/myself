import React, { Component } from 'react';
import 'antd/dist/antd.css';

import { Layout } from 'antd';
import MyHeader from './components/MyHeader';
import MyContent from './components/MyContent';
// import './fonts/Lacquer-Regular.ttf';
import './App.css';

const { Footer } = Layout;

class App extends Component {
  render() {
    return (
      <Layout>
        <MyHeader />
        <MyContent />
        <Footer style={{ textAlign: 'center', fontFamily: 'Lacquer' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    );
  }
}

export default App;
