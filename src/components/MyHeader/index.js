import React, { Component } from 'react'
import { Layout } from 'antd'

import MyMenu from 'components/MyMenu'

import './my-header.css'

const { Header } = Layout

class MyHeader extends Component {
  render() {
    return (
      <Header className="my-header">
        <MyMenu />
      </Header>
    )
  }
}

export default MyHeader
