import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { FormattedMessage } from 'react-intl'
import MediaQuery from 'react-responsive'

import avatar from 'assets/avatar.jpg'

import shape1 from 'assets/shape-1.png'
import MySocialLogo from 'components/MySocialLogo'
import { DESKTOP_WIDTH, MY_BANNER, MY_SOCIAL_LINKS_CONFIG } from 'constants.js'
import { getIcon } from 'utils'

import './my-banner.scss'

const socialConfig = MY_SOCIAL_LINKS_CONFIG.map(config => ({
  url: config.url,
  icon: getIcon(config.type),
}))

class MyBanner extends Component {
  renderSocialItem = item => <MySocialLogo url={item.url} icon={item.icon} key={item.url} />

  render() {
    const { id } = this.props
    return (
      <div id={id} className="my-banner">
        <div className="my-shape">
          <img src={shape1} alt="Shape" />
        </div>
        <div className="my-banner-left">
          <div className="my-description">
            <div className="my-hello-subtitle">
              <FormattedMessage id={MY_BANNER.hello.id} defaultMessage={MY_BANNER.hello.value} />
            </div>
            <div className="my-description-title">
              <FormattedMessage id={MY_BANNER.name.id} defaultMessage={MY_BANNER.name.value} />
            </div>
            <div className="my-description-footer">
              <FormattedMessage id={MY_BANNER.title.id} defaultMessage={MY_BANNER.title.value} />
            </div>
          </div>
          <div className="my-social-bar">
            <div className="bar" />
            <div className="my-social-icons">{socialConfig.map(this.renderSocialItem)}</div>
          </div>
        </div>
        <MediaQuery minWidth={DESKTOP_WIDTH}>
          {matches =>
            matches ? (
              <div className="my-banner-right">
                <img src={avatar} alt="avatar" />
              </div>
            ) : (
              <></>
            )
          }
        </MediaQuery>
      </div>
    )
  }
}

MyBanner.propTypes = {
  id: PropTypes.string.isRequired,
}

export default MyBanner
