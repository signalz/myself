import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import './my-menu-list-item.scss'

const MyMenuListItem = ({ item, active, onClickHandler }) => (
  <div
    className={classNames('my-menu-list-item', { active })}
    onClick={onClickHandler(item.value)}
  >
    {active && <div className="active-vertical-bar" />}
    <div>{item.label}</div>
  </div>
)

MyMenuListItem.propTypes = {
  active: PropTypes.bool,
  item: PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
  }).isRequired,
  onClickHandler: PropTypes.func.isRequired
}

MyMenuListItem.defaultProps = {
  active: false
}

export default MyMenuListItem
