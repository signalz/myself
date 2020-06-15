import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'

import './my-skill-percent-bar.scss'

const MySkillPercentBar = ({ label, value, width }) => (
  <div className="my-skill-percent-bar">
    <div className="my-skill-header">
      <div>
        <FormattedMessage id={label} defaultMessage={label} />
      </div>
      <div>
        <FormattedMessage id={value} defaultMessage={value} />
      </div>
    </div>
    <div className="my-skill-bar-wrapper">
      <div className="my-skill-bar" style={{ width }} />
    </div>
  </div>
)

MySkillPercentBar.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
}

export default MySkillPercentBar
