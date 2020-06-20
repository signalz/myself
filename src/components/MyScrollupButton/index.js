import { UpOutlined } from '@ant-design/icons'
import React from 'react'
// import { FormattedMessage } from 'react-intl'

import './my-scrollup-button.scss'

const MyScrollupButton = () => (
  <div className="my-back-to-top" onClick={() => window.scrollTo(0, 0)}>
    <UpOutlined />
  </div>
)

export default MyScrollupButton
