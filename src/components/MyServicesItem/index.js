import { Icon } from 'antd'
import PropTypes from 'prop-types'
import React from 'react'
import { FormattedMessage } from 'react-intl'

import './my-services-item.scss'

const MyServicesItem = ({ icon, label, description }) => (
  <div className="my-services-item">
    <div className="my-services-item-icon-wrapper">
      <Icon component={icon} className="my-services-item-icon" />
    </div>
    <div className="my-services-item-header">
      <FormattedMessage id={label} defaultMessage={label} />
    </div>
    <div className="my-services-item-description">
      <FormattedMessage id={description} defaultMessage={description} />
    </div>
  </div>
)

MyServicesItem.propTypes = {
  icon: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default MyServicesItem
