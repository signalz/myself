import React from 'react'
import { FormattedMessage } from 'react-intl'

import FrownIcon from 'components/svg/frown'

import './my-not-found-page.scss'

const MyNotFoundPage = () => (
  <div className="my-not-found-page">
    <div className="my-not-found-page-icon">
      <FrownIcon />
    </div>
    <div className="my-not-found-page-code">
      <FormattedMessage id="app.mynotfound.code" defaultMessage="app.mynotfound.code" />
    </div>
    <div className="my-not-found-page-title">
      <FormattedMessage id="app.mynotfound.title" defaultMessage="app.mynotfound.title" />
    </div>
    <div className="my-not-found-page-description">
      <FormattedMessage
        id="app.mynotfound.description.first"
        defaultMessage="app.mynotfound.description.first"
      />
    </div>
    <div className="my-not-found-page-description">
      <FormattedMessage
        id="app.mynotfound.description.second.one"
        defaultMessage="app.mynotfound.description.second.one"
      />
      <a href="/">
        <FormattedMessage
          id="app.mynotfound.description.second.two"
          defaultMessage="app.mynotfound.description.second.two"
        />
      </a>{' '}
      <FormattedMessage
        id="app.mynotfound.description.second.three"
        defaultMessage="app.mynotfound.description.second.three"
      />
    </div>
  </div>
)

export default MyNotFoundPage
