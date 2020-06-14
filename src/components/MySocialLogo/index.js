import { Icon } from 'antd'
import PropTypes from 'prop-types'
import React from 'react'

import './my-social-logo.scss'

const MySocialLogo = ({ url, icon }) => (
  <a href={url} className="my-social-icon-wrapper">
    <Icon component={icon} className="my-social-icon" />
  </a>
)

MySocialLogo.propTypes = {
  url: PropTypes.string.isRequired,
  icon: PropTypes.func.isRequired,
}

export default MySocialLogo
