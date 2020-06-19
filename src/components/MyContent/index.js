import { Layout, Icon } from 'antd'
import React from 'react'
// import { FormattedMessage } from 'react-intl'

import MyAbout from 'components/MyAbout'
import MyBanner from 'components/MyBanner'
import DesktopIcon from 'components/svg/desktop'
import MobileIcon from 'components/svg/mobile'
import ApiIcon from 'components/svg/api'
import { SECTIONS } from 'constants.js'

import './my-content.scss'

const { Content } = Layout

const MyContent = () => (
  <Content className="my-content">
    <MyBanner id={SECTIONS.HOME.id} />
    <MyAbout id={SECTIONS.ABOUT.id} />
    <div className="my-services">
      <div className="my-services-header">My Services</div>
      <div className="my-services-list">
        <div className="my-services-item">
          <Icon component={DesktopIcon} className="my-services-item-icon" />
          <div className="my-services-item-header">Websites</div>
          <div className="my-services-item-description">Front end or full stack</div>
        </div>
        <div className="my-services-item">
          <Icon component={ApiIcon} className="my-services-item-icon" />
          <div className="my-services-item-header">Apis</div>
          <div className="my-services-item-description">Dedicated and serverless APIs</div>
        </div>
        <div className="my-services-item">
          <Icon component={MobileIcon} className="my-services-item-icon" />
          <div className="my-services-item-header">Mobile</div>
          <div className="my-services-item-description">Hybrid application</div>
        </div>
      </div>
    </div>
  </Content>
)

export default MyContent
