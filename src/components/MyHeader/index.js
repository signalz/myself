import React, { Component } from 'react';
import { Layout } from 'antd';

import MyMenu from '../MyMenu';
import './header.css';

const { Header } = Layout;

class MyHeader extends Component {
  render() {
    return (
      <Header className="header">
        <MyMenu/>
        <div className="intro">
          <div className="name">Son Nguyen</div>
          <div className="description">
            <div>Experienced full stack developer</div>
            <div className="divider"></div>
            <div className="legends">I code stuff</div>
          </div>
        </div>
      </Header>
    );
  }
}

export default MyHeader;
