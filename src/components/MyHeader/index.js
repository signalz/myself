import React, { Component } from 'react'
import { Layout } from 'antd'

import MyMenu from '../MyMenu'

import './header.css'

const { Header } = Layout

class MyHeader extends Component {
  render() {
    return (
      <Header className="header">
        <MyMenu />
      </Header>
    )
  }
}

export default MyHeader
