import { Layout } from 'antd'
// import classNames from 'classnames'
import React, { Component } from 'react'
import MediaQuery from 'react-responsive'
// import { FormattedMessage } from 'react-intl'

import logo from 'assets/logo.png'
import MyLogo from 'components/MyLogo'
import MyMenuButton from 'components/MyMenuButton'
import MyMenuList from 'components/MyMenuList'
import { MY_MENU_OPTIONS, MY_NAME, TABLET_WIDTH } from 'constants.js'

import './my-header.scss'

const { Header } = Layout

class MyHeader extends Component {
  state = {
    activeItem: 'home',
    active: false,
  }

  onClickItemHandler = value => () => this.setState({ activeItem: value })

  onClickMenuButtonHandler = () => {
    const { active } = this.state
    this.setState({ active: !active })
  }

  render() {
    const { activeItem, active } = this.state
    return (
      <Header className="my-header">
        <MyLogo logo={logo} name={MY_NAME} />
        <MediaQuery minWidth={TABLET_WIDTH}>
          {matches =>
            matches ? (
              <>
                <MyMenuList
                  items={MY_MENU_OPTIONS}
                  activeItem={activeItem}
                  onClickItemHandler={this.onClickItemHandler}
                />
              </>
            ) : (
              <MyMenuButton active={active} onClick={this.onClickMenuButtonHandler} />
            )
          }
        </MediaQuery>
      </Header>
    )
  }
}

export default MyHeader
