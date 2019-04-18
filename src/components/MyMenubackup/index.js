import React, { Component } from 'react';
// import { Menu, Icon } from 'antd';

import './menu.css';

class MyMenu extends Component {
  render() {
    return (
      <div className="menu">
        <a href="/">Home</a>
        <a href="/">CV</a>
      </div>
    );
  }
}

export default MyMenu;
