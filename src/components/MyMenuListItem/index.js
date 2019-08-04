import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import './my-menu-list-item.scss'

const MyMenuListItem = ({ item, active }) => (
  <div className={classNames('my-menu-list-item', active)}>{item.label}</div>
)

MyMenuListItem.propTypes = {
  active: PropTypes.bool,
  item: PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
  }).isRequired
}

MyMenuListItem.defaultProps = {
  active: false
}

export default MyMenuListItem
