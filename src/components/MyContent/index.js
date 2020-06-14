import { Layout } from 'antd'
import React from 'react'

import MyBanner from 'components/MyBanner'
import { SECTIONS } from 'constants.js'

import './my-content.scss'

const { Content } = Layout

const MyContent = () => (
  <Content className="my-content">
    <MyBanner id={SECTIONS.HOME.id} />
    <div id={SECTIONS.ABOUT.id} className="my-about">
      <div className="my-about-me">About Me</div>
      <div>
        <div className="my-about-hello">Hi There! I'm Son Nguyen</div>
        <div>A fullstack(overflow) developer.</div>
      </div>
    </div>
  </Content>
)

export default MyContent
