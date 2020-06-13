import { Icon } from 'antd'
import PropTypes from 'prop-types'
import React from 'react'

import './my-social-logo.scss'

const MySocialLogo = ({ url, icon }) => (
  <a href={url}>
    <Icon component={icon} className="my-social-icon" />
  </a>
)

MySocialLogo.propTypes = {
  url: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
}

export default MySocialLogo
