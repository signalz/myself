import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { FormattedMessage } from 'react-intl'

import MyServicesItem from 'components/MyServicesItem'
import { MY_SERVICES_CONFIG } from 'constants.js'
import { getIcon } from 'utils'

import './my-services.scss'

const services = MY_SERVICES_CONFIG.map(item => ({
  ...item,
  icon: getIcon(item.type),
}))

class MyServices extends Component {
  renderServiceItem = item => (
    <MyServicesItem
      icon={item.icon}
      key={item.type}
      label={item.label}
      description={item.description}
    />
  )

  render() {
    const { id } = this.props
    return (
      <div id={id} className="my-services">
        <div className="my-services-header">
          <FormattedMessage id="app.myservices.header" defaultMessage="app.myservices.header" />
        </div>
        <div className="my-services-list">{services.map(this.renderServiceItem)}</div>
      </div>
    )
  }
}

MyServices.propTypes = {
  id: PropTypes.string.isRequired,
}

export default MyServices
