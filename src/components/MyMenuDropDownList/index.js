import React, { Component } from 'react'
import PropTypes from 'prop-types'

import MyMenuDropDownListItem from 'components/MyMenuDropDownListItem'

import './my-menu-drop-down-list.scss'

class MyMenuDropDownList extends Component {
  renderItem = item => {
    const { activeItem, onClickItemHandler } = this.props
    return (
      <MyMenuDropDownListItem
        item={item}
        active={activeItem === item.value}
        key={item.value}
        onClickHandler={onClickItemHandler}
      />
    )
  }

  render() {
    const { items } = this.props
    return (
      <div className="my-menu-dropdown-wrapper">
        <div className="my-menu-dropdown-list">{items.map(this.renderItem)}</div>
      </div>
    )
  }
}

MyMenuDropDownList.propTypes = {
  activeItem: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onClickItemHandler: PropTypes.func.isRequired,
}

export default MyMenuDropDownList
