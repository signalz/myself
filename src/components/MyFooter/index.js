import { Layout } from 'antd'
import React from 'react'
import { FormattedMessage } from 'react-intl'

import './my-footer.scss'

const { Footer } = Layout

const MyFooter = () => (
  <Footer className="my-footer">
    <FormattedMessage id="app.footer" defaultMessage="app.footer" />
  </Footer>
)

export default MyFooter
