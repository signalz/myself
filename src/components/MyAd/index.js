import React from 'react'
import { FormattedMessage } from 'react-intl'

import { MY_CV_URL } from 'constants.js'

import './my-ad.scss'

const MyAd = () => (
  <div className="my-ad">
    <div className="my-ad-question">
      <FormattedMessage id="app.myad.question" defaultMessage="app.myad.question" />
    </div>
    <a href={MY_CV_URL} className="my-ad-link">
      <FormattedMessage id="app.myad.link" defaultMessage="app.myad.link" />
    </a>
  </div>
)

export default MyAd
