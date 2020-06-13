import { Layout } from 'antd'
import React from 'react'

import MyBanner from 'components/MyBanner'

import './my-content.scss'

const { Content } = Layout

const MyContent = () => (
  <Content className="my-content">
    <MyBanner />
  </Content>
)

export default MyContent
