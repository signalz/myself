import React, { Component } from "react";
import { Layout } from "antd";

import MyMenuList from "components/MyMenuList";
import { MY_MENU_OPTIONS } from "constants.js";

import "./my-header.scss";

const { Header } = Layout;

class MyHeader extends Component {
  state = {
    activeItem: "home"
  };

  onClickItemHandler = value => () => this.setState({ activeItem: value });

  render() {
    const { activeItem } = this.state;
    return (
      <Header className="my-header">
        <MyMenuList
          items={MY_MENU_OPTIONS}
          activeItem={activeItem}
          onClickItemHandler={this.onClickItemHandler}
        />
      </Header>
    );
  }
}

export default MyHeader;
