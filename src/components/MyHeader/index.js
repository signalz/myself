import { Layout } from 'antd'
import PropTypes from 'prop-types'
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
    // activeItem: SECTIONS.HOME.id,
    activeMenuButton: false,
  }

  onClickItemHandler = value => () => {
    const { onActiveItemChange } = this.props
    this.setState({ activeMenuButton: false })
    onActiveItemChange(value)
    window.location = `#${value}`
  }

  onClickMenuButtonHandler = () => {
    const { activeMenuButton } = this.state
    this.setState({ activeMenuButton: !activeMenuButton })
  }

  render() {
    const { activeMenuButton } = this.state
    const { activeItem } = this.props
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

MyHeader.propTypes = {
  activeItem: PropTypes.string.isRequired,
  onActiveItemChange: PropTypes.func.isRequired,
}

export default MyHeader
