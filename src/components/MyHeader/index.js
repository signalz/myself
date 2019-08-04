import React, { Component } from 'react'
import { Layout } from 'antd'

// import MyMenu from 'components/MyMenu'

import './my-header.scss'

const { Header } = Layout

class MyHeader extends Component {
  render() {
    return (
      <Header className="my-header">
        <div>
          <div>Test</div>
          <div>Test</div>
        </div>
      </Header>
    )
  }
}

export default MyHeader
