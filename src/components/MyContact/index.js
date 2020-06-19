import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { FormattedMessage } from 'react-intl'

import MyServicesItem from 'components/MyServicesItem'
import { MY_CONTACT_CONFIG } from 'constants.js'
import { getIcon } from 'utils'

import './my-contact.scss'

const contacts = MY_CONTACT_CONFIG.map(item => ({
  ...item,
  icon: getIcon(item.type),
}))

class MyContact extends Component {
  renderContactItem = item => (
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
      <div id={id} className="my-contact">
        <div className="my-contact-header">
          <FormattedMessage id="app.mycontact.header" defaultMessage="app.mycontact.header" />
        </div>
        <div className="my-contact-list">{contacts.map(this.renderContactItem)}</div>
      </div>
    )
  }
}

MyContact.propTypes = {
  id: PropTypes.string.isRequired,
}

export default MyContact
