import React from 'react'
import { Layout, Menu } from 'antd'
import { addLocaleData, IntlProvider, FormattedMessage } from 'react-intl'
import localeEN from 'react-intl/locale-data/en'
import localeVI from 'react-intl/locale-data/vi'
import 'antd/dist/antd.css'

import messagesEN from './translations/en.json'
import messagesVI from './translations/vi.json'
import MyHeader from './components/MyHeader'
import MyContent from './components/MyContent'
import './App.css'

// setup react intl
const { Header, Content, Footer } = Layout
addLocaleData([...localeEN, ...localeVI])
const language = navigator.language.split(/[-_]/)[0]
const messages = {
  vi: messagesVI,
  en: messagesEN
}
const App = () => (
  <IntlProvider locale={language} messages={messages[language]}>
    <Layout className="app-layout">
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
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
