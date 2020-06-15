import { Layout } from 'antd'
import React from 'react'
import { FormattedMessage } from 'react-intl'

import MyBanner from 'components/MyBanner'
import MyTextLabel from 'components/MyTextLabel'
import MySkillPercentBar from 'components/MySkillPercentBar'
import { SECTIONS, MY_LABEL_CONFIG, MY_SKILLS } from 'constants.js'

import { getIcon } from 'utils'

import './my-content.scss'

const labelItems = MY_LABEL_CONFIG.map(item => ({
  ...item,
  icon: getIcon(item.type),
}))
const { Content } = Layout

const renderLabelItem = item => (
  <MyTextLabel value={item.value} icon={item.icon} key={item.type} label={item.label} />
)

const renderSkillItem = item => (
  <MySkillPercentBar value={item.value} key={item.label} label={item.label} width={item.width} />
)

const MyContent = () => (
  <Content className="my-content">
    <MyBanner id={SECTIONS.HOME.id} />
    <div id={SECTIONS.ABOUT.id} className="my-about">
      <div className="my-about-me">
        <FormattedMessage id="app.myabout.about" defaultMessage="app.myabout.about" />
      </div>
      <div>
        <div>
          <div>
            <div className="my-about-hello">
              <FormattedMessage id="app.myabout.hello" defaultMessage="app.myabout.hello" />
            </div>
            <div className="my-about-description">
              <FormattedMessage
                id="app.myabout.description"
                defaultMessage="app.myabout.description"
              />
            </div>
          </div>
          <div className="my-label-items">{labelItems.map(renderLabelItem)}</div>
        </div>
        <div>{MY_SKILLS.map(renderSkillItem)}</div>
      </div>
    </div>
  </Content>
)

export default MyContent
