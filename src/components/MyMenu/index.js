import React, { Component } from 'react';
import { Menu } from 'antd';

import './menu.css';

class MyMenu extends Component {
  render() {
    return (
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1" className="menu-item">Home</Menu.Item>
        <Menu.Item key="2" className="menu-item">CV</Menu.Item>
      </Menu>
    );
  }
}

export default MyMenu;