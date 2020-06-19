import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { FormattedMessage } from 'react-intl'

import MySkillPercentBar from 'components/MySkillPercentBar'
import MyTextLabel from 'components/MyTextLabel'
import { MY_SKILLS, MY_LABEL_CONFIG } from 'constants.js'
import { getIcon } from 'utils'

import './my-about.scss'

const labelItems = MY_LABEL_CONFIG.map(item => ({
  ...item,
  icon: getIcon(item.type),
}))

class MyAbout extends Component {
  renderLabelItem = item => (
    <MyTextLabel value={item.value} icon={item.icon} key={item.type} label={item.label} />
  )

  renderSkillItem = item => (
    <MySkillPercentBar value={item.value} key={item.label} label={item.label} width={item.width} />
  )

  render() {
    const { id } = this.props
    return (
      <div id={id} className="my-about">
        <div className="my-about-me">
          <FormattedMessage id="app.myabout.about" defaultMessage="app.myabout.about" />
        </div>
        <div className="my-description-skils">
          <div className="my-description-skils-left">
            <div>
              <div className="my-about-hello">
                <FormattedMessage id="app.myabout.hello" defaultMessage="app.myabout.hello" />
              </div>
              <div className="my-about-description">
                <FormattedMessage
                  id="app.myabout.description"
                  defaultMessage="app.myabout.description"
                />
              </div>
            </div>
            <div className="my-label-items">{labelItems.map(this.renderLabelItem)}</div>
          </div>
          <div className="my-description-skils-right">{MY_SKILLS.map(this.renderSkillItem)}</div>
        </div>
      </div>
    )
  }
}

MyAbout.propTypes = {
  id: PropTypes.string.isRequired,
}

export default MyAbout
