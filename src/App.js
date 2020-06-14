import React from 'react'
// import { BrowserRouter as Router } from 'react-router-dom'
import { Layout } from 'antd'
import { addLocaleData, IntlProvider } from 'react-intl'
import localeEN from 'react-intl/locale-data/en'
import localeVI from 'react-intl/locale-data/vi'
import 'antd/dist/antd.css'

import messagesEN from './translations/en.json'
import messagesVI from './translations/vi.json'
import MyHeader from './components/MyHeader'
import MyContent from './components/MyContent'
import './App.scss'

// setup react intl
// const { Footer } = Layout
addLocaleData([...localeEN, ...localeVI])
const language = navigator.language.split(/[-_]/)[0]
const messages = {
  vi: messagesVI,
  en: messagesEN,
}
const App = () => (
  <IntlProvider locale={language} messages={messages[language]}>
    {/* <Router> */}
    <Layout className="my-app-layout">
      <MyHeader />
      <MyContent />
      {/* <Footer style={{ textAlign: 'center', width: '100%', position: 'absolute', bottom: 0 }}>
        <FormattedMessage id="app.footer" />
      </Footer> */}
    </Layout>
    {/* </Router> */}
  </IntlProvider>
)

export default App
