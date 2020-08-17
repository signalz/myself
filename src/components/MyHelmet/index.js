import React from 'react'
import { FormattedMessage } from 'react-intl'
import { Helmet } from 'react-helmet'

import avatar from 'assets/avatar.jpg'

const MyHelmet = () => (
  <FormattedMessage id="app.myhelmet.title" defaultMessage="app.myhelmet.title">
    {title => (
      <FormattedMessage id="app.myhelmet.description" defaultMessage="app.myhelmet.description">
        {description => (
          <Helmet>
            {/* HTML Meta Tags */}
            <title>{title}</title>
            <meta name="description" content={description} />

            {/* Google / Search Engine Tags */}
            <meta itemProp="name" content={title} />
            <meta itemProp="description" content={description} />
            <meta itemProp="image" content={avatar} />

            {/* Facebook Meta Tags */}
            <meta property="og:url" content="https://focused-cray-5d2879.netlify.app" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={avatar} />

            {/* Twitter Meta Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={avatar} />
          </Helmet>
        )}
      </FormattedMessage>
    )}
  </FormattedMessage>
)

export default MyHelmet
