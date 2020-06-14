import { Layout } from 'antd'
import React, { Component } from 'react'
import MediaQuery from 'react-responsive'

import logo from 'assets/logo.png'
import MyLogo from 'components/MyLogo'
import MyMenuButton from 'components/MyMenuButton'
import MyMenuDropDownList from 'components/MyMenuDropDownList'
import MyMenuList from 'components/MyMenuList'
import { MY_MENU_OPTIONS, MY_NAME, TABLET_WIDTH } from 'constants.js'

import './my-header.scss'

const { Header } = Layout

class MyHeader extends Component {
  state = {
    activeItem: 'home',
    activeMenuButton: false,
  }

  onClickItemHandler = value => () => {
    this.setState({ activeItem: value, activeMenuButton: false })
    window.location = `#${value}`
  }

  onClickMenuButtonHandler = () => {
    const { activeMenuButton } = this.state
    this.setState({ activeMenuButton: !activeMenuButton })
  }

  render() {
    const { activeItem, activeMenuButton } = this.state
    return (
      <MediaQuery minWidth={TABLET_WIDTH}>
        {matches =>
          matches ? (
            <Header className="my-header">
              <MyLogo logo={logo} name={MY_NAME} />
              <MyMenuList
                items={MY_MENU_OPTIONS}
                activeItem={activeItem}
                onClickItemHandler={this.onClickItemHandler}
              />
            </Header>
          ) : (
            <>
              <Header className="my-header">
                <MyLogo logo={logo} name={MY_NAME} />
                <MyMenuButton active={activeMenuButton} onClick={this.onClickMenuButtonHandler} />
              </Header>
              {activeMenuButton && (
                <MyMenuDropDownList
                  items={MY_MENU_OPTIONS}
                  activeItem={activeItem}
                  onClickItemHandler={this.onClickItemHandler}
                />
              )}
            </>
          )
        }
      </MediaQuery>
    )
  }
}

export default MyHeader
