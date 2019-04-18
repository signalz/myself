import React, { Component } from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';

import MyHeader from './components/MyHeader';
import MyContent from './components/MyContent';

const {
  Footer, Content,
} = Layout;

class App extends Component {
  render() {
    return (
      // <Layout>
      //   <MyHearder/>
      //   <MyContent/>
      //   <Footer>Footer</Footer>
      // </Layout>
      <Layout>
        <MyHeader />
        <Content>
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>Content</div>
          <MyContent/>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    );
  }
}

export default App;
