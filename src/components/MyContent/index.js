import React, { Component } from 'react';
import { Layout } from 'antd';

const { Content } = Layout;

class MyContent extends Component {
  render() {
    return (
      <Content>
        <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>Content</div>
      </Content>
    );
  }
}

export default MyContent;
