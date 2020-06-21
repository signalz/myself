import { Layout } from 'antd'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import VisibilitySensor from 'react-visibility-sensor'

import MyAbout from 'components/MyAbout'
import MyAd from 'components/MyAd'
import MyBanner from 'components/MyBanner'
import MyContact from 'components/MyContact'
import MyServices from 'components/MyServices'
import MyScrollupButton from 'components/MyScrollupButton'

import { SECTIONS, HEADER_HEIGHT } from 'constants.js'

import './my-content.scss'

const { Content } = Layout

class MyContent extends Component {
  state = {
    home: false,
    about: false,
    services: false,
    contact: false,
  }

  oldPosition = 0

  componentDidMount = () => {
    window.addEventListener('scroll', this.onScroll)
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.onScroll)
  }

  onChange = type => isVisible => {
    this.setState({
      [type]: isVisible,
    })
  }

  getActiveSection = () => {
    const { home, about, services, contact } = this.state
    if (home) {
      return SECTIONS.HOME.id
    }

    if (about) {
      return SECTIONS.ABOUT.id
    }

    if (services) {
      return SECTIONS.SERVICES.id
    }

    if (contact) {
      return SECTIONS.CONTACT.id
    }

    return ''
  }

  onScroll = () => {
    const { onActiveItemChange } = this.props
    const position = window.pageYOffset || document.documentElement.scrollTo
    if (position > this.oldPosition) {
      // downscroll code
      onActiveItemChange(this.getActiveSection())
    } else {
      // upscroll code
      onActiveItemChange(this.getActiveSection())
    }
    this.oldPosition = position <= 0 ? 0 : position
  }

  render() {
    const { home } = this.state
    return (
      <Content className="my-content">
        <VisibilitySensor
          partialVisibility
          onChange={this.onChange(SECTIONS.HOME.id)}
          offset={{ top: HEADER_HEIGHT }}
        >
          <MyBanner id={SECTIONS.HOME.id} />
        </VisibilitySensor>
        <VisibilitySensor
          partialVisibility
          onChange={this.onChange(SECTIONS.ABOUT.id)}
          offset={{ top: HEADER_HEIGHT }}
        >
          <MyAbout id={SECTIONS.ABOUT.id} />
        </VisibilitySensor>
        <VisibilitySensor
          partialVisibility
          onChange={this.onChange(SECTIONS.SERVICES.id)}
          offset={{ top: HEADER_HEIGHT }}
        >
          <MyServices id={SECTIONS.SERVICES.id} />
        </VisibilitySensor>
        <MyAd />
        <VisibilitySensor
          partialVisibility
          onChange={this.onChange(SECTIONS.CONTACT.id)}
          offset={{ top: HEADER_HEIGHT }}
        >
          <MyContact id={SECTIONS.CONTACT.id} />
        </VisibilitySensor>
        {!home && <MyScrollupButton />}
      </Content>
    )
  }
}

MyContent.propTypes = {
  onActiveItemChange: PropTypes.func.isRequired,
}

export default MyContent
