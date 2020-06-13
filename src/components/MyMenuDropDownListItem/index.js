import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'

import './my-menu-drop-down-list-item.scss'

const MyMenuDropDownListItem = ({ item, active, onClickHandler }) => (
  <div
    onClick={onClickHandler(item.value)}
    className={classNames('my-menu-drop-down-list-item', { active })}
  >
    <FormattedMessage id={item.id} defaultMessage={item.value} />
  </div>
)

MyMenuDropDownListItem.propTypes = {
  active: PropTypes.bool,
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
  onClickHandler: PropTypes.func.isRequired,
}

MyMenuDropDownListItem.defaultProps = {
  active: false,
}

export default MyMenuDropDownListItem
