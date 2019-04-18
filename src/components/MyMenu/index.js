import React, { Component } from 'react';
import { Menu } from 'antd';

class MyMenu extends Component {
  render() {
    return (
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1" style={{ width: 100 }}>Home</Menu.Item>
        <Menu.Item key="2" style={{ width: 100 }}>CV</Menu.Item>
      </Menu>
    );
  }
}

export default MyMenu;