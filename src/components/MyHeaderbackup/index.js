import React, { Component } from 'react';
import { Layout } from 'antd';

import MyMenu from '../MyMenu';
import MyIntro from '../MyIntro';
import './header.css';

const { Header } = Layout;

class MyHeader extends Component {
  render() {
    return (
      <Header className="header">
        <MyMenu/>
        <MyIntro/>
      </Header>
    );
  }
}

export default MyHeader;
