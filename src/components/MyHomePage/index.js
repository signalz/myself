import { Layout } from 'antd'
import React, { Component } from 'react'

import MyHeader from 'components/MyHeader'
import MyContent from 'components/MyContent'
import MyFooter from 'components/MyFooter'
import { SECTIONS } from 'constants.js'

import './my-home-page.scss'

class MyHomePage extends Component {
  state = {
    activeItem: SECTIONS.HOME.id,
  }

  onActiveItemChange = activeItem => this.setState({ activeItem })

  render() {
    const { activeItem } = this.state
    return (
      <Layout className="my-home-page-layout">
        <MyHeader activeItem={activeItem} onActiveItemChange={this.onActiveItemChange} />
        <MyContent onActiveItemChange={this.onActiveItemChange} />
        <MyFooter />
      </Layout>
    )
  }
}

export default MyHomePage
