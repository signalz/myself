import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'

import './my-logo.scss'

const MyLogo = ({ logo, name }) => (
  <div className="my-logo">
    <img src={logo} alt="my-logo" />
    <div className="my-name">
      <FormattedMessage id={name.id} defaultMessage={name.value} />
    </div>
  </div>
)

MyLogo.propTypes = {
  logo: PropTypes.string,
  name: PropTypes.shape({
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
  }).isRequired
}

MyLogo.defaultProps = {
  logo: ''
}

export default MyLogo
