import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import './my-menu-button.scss'

const MyMenuButton = ({ active, onClick }) => (
  <button type="button" onClick={() => onClick()}>
    <span className={classNames('button-bar', { active })} />
    <span className={classNames('button-bar', { active })} />
    <span className={classNames('button-bar', { active })} />
  </button>
)

MyMenuButton.propTypes = {
  active: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
}

MyMenuButton.defaultProps = {
  active: false,
}

export default MyMenuButton
