import React, { Component } from 'react'
import PropTypes from 'prop-types'

import MyMenuListItem from 'components/MyMenuListItem'

import './my-menu-list.scss'

class MyMenuList extends Component {
  renderItem = item => {
    const { activeItem, onClickItemHandler } = this.props
    return (
      <MyMenuListItem
        item={item}
        active={activeItem === item.value}
        key={item.value}
        onClickHandler={onClickItemHandler}
      />
    )
  }

  render() {
    const { items } = this.props
    return <div className="my-menu-list">{items.map(this.renderItem)}</div>
  }
}

MyMenuList.propTypes = {
  activeItem: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    })
  ).isRequired,
  onClickItemHandler: PropTypes.func.isRequired
}

export default MyMenuList
