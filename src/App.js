import React from 'react'
import { Layout } from 'antd'
import { addLocaleData, IntlProvider, FormattedMessage } from 'react-intl'
import localeEN from 'react-intl/locale-data/en'
import localeVI from 'react-intl/locale-data/vi'
import 'antd/dist/antd.css'

import messagesEN from './translations/en.json'
import messagesVI from './translations/vi.json'
import MyHeader from './components/MyHeader'
// import MyContent from './components/MyContent'
import './App.scss'

// setup react intl
const { Content, Footer } = Layout
addLocaleData([...localeEN, ...localeVI])
const language = navigator.language.split(/[-_]/)[0]
const messages = {
  vi: messagesVI,
  en: messagesEN
}
const App = () => (
  <IntlProvider locale={language} messages={messages[language]}>
    <Layout className="my-app-layout" style={{ height: 5000 }}>
      <MyHeader />
      <Content style={{ padding: '0 50px' }}>
        <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
          Content
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        <FormattedMessage id="app.footer" />
      </Footer>
    </Layout>
  </IntlProvider>
)

export default App
