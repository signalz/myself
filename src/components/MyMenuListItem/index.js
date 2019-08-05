import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'

import './my-menu-list-item.scss'

const MyMenuListItem = ({ item, active, onClickHandler }) => (
  <div
    className={classNames('my-menu-list-item', { active })}
    onClick={onClickHandler(item.value)}
  >
    <div
      className={classNames(active ? 'active-vertical-bar' : 'vertical-bar')}
    />
    <div>
      <FormattedMessage id={item.id} defaultMessage={item.value} />
    </div>
  </div>
)

MyMenuListItem.propTypes = {
  active: PropTypes.bool,
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
  }).isRequired,
  onClickHandler: PropTypes.func.isRequired
}

MyMenuListItem.defaultProps = {
  active: false
}

export default MyMenuListItem
