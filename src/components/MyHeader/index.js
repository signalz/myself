import { Layout, Menu, Dropdown, Icon } from 'antd'
import React, { Component } from 'react'
import MediaQuery from 'react-responsive'

import MyMenuList from 'components/MyMenuList'
import { MY_MENU_OPTIONS, PIVOT_WIDTH } from 'constants.js'

import './my-header.scss'

const { Header } = Layout

class MyHeader extends Component {
  state = {
    activeItem: 'home'
  }

  onClickItemHandler = value => () => this.setState({ activeItem: value })

  render() {
    const { activeItem } = this.state
    const menu = (
      <Menu>
        <Menu.Item>
          <div>1st menu item</div>
        </Menu.Item>
      </Menu>
    )
    return (
      <Header className="my-header">
        <MediaQuery minWidth={PIVOT_WIDTH}>
          {matches =>
            matches ? (
              <>
                <div>Ngoc Son</div>
                <MyMenuList
                  items={MY_MENU_OPTIONS}
                  activeItem={activeItem}
                  onClickItemHandler={this.onClickItemHandler}
                />
              </>
            ) : (
              <Dropdown overlay={menu}>
                <div>
                  Hover me <Icon type="down" />
                </div>
              </Dropdown>
            )
          }
        </MediaQuery>
      </Header>
    )
  }
}

export default MyHeader
