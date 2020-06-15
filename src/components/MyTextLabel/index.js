import { Icon } from 'antd'
import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'

import './my-text-label.scss'

const MyTextLabel = ({ icon, label, value }) => (
  <div className="my-text-label">
    <Icon component={icon} className="my-text-label-icon" />
    <div className="my-text-label-label">
      <FormattedMessage id={label} defaultMessage={label} />
    </div>
    <div className="my-text-label-value">
      <FormattedMessage id={value} defaultMessage={value} />
    </div>
  </div>
)

MyTextLabel.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  icon: PropTypes.func.isRequired,
}

export default MyTextLabel
