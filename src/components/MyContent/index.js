import { Layout } from 'antd'
import React from 'react'
// import { FormattedMessage } from 'react-intl'

import MyAbout from 'components/MyAbout'
import MyBanner from 'components/MyBanner'
import MyServices from 'components/MyServices'
import { SECTIONS } from 'constants.js'

import './my-content.scss'

const { Content } = Layout

const MyContent = () => (
  <Content className="my-content">
    <MyBanner id={SECTIONS.HOME.id} />
    <MyAbout id={SECTIONS.ABOUT.id} />
    <MyServices id={SECTIONS.SERVICES.id} />
  </Content>
)

export default MyContent
