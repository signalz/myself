import React, { Component } from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';

// import bg from './bg.jpg';
import './test.css';

const { Header, Footer, Content } = Layout;

class App extends Component {
  render() {
    return (
        <Layout>
          <Header className="test">Header</Header>
          <Content>Content</Content>
          <Footer>Footer</Footer>
        </Layout>
    );
  }
}

export default App;
