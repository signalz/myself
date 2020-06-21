import React, { Component } from 'react'
import { Layout } from 'antd'
import { addLocaleData, IntlProvider } from 'react-intl'
import localeEN from 'react-intl/locale-data/en'
import localeVI from 'react-intl/locale-data/vi'
import 'antd/dist/antd.css'

import messagesEN from './translations/en.json'
import messagesVI from './translations/vi.json'
import MyHeader from './components/MyHeader'
import MyContent from './components/MyContent'
import MyFooter from './components/MyFooter'
import { SECTIONS } from './constants'

import './App.scss'

// setup react intl
addLocaleData([...localeEN, ...localeVI])
const language = navigator.language.split(/[-_]/)[0]
const messages = {
  vi: messagesVI,
  en: messagesEN,
}

class App extends Component {
  state = {
    activeItem: SECTIONS.HOME.id,
  }

  onActiveItemChange = activeItem => this.setState({ activeItem })

  render() {
    const { activeItem } = this.state
    return (
      <IntlProvider locale={language} messages={messages[language]}>
        <Layout className="my-app-layout">
          <MyHeader activeItem={activeItem} onActiveItemChange={this.onActiveItemChange} />
          <MyContent onActiveItemChange={this.onActiveItemChange} />
          <MyFooter />
        </Layout>
      </IntlProvider>
    )
  }
}

// const App = () => (
//   <IntlProvider locale={language} messages={messages[language]}>
//     <Layout className="my-app-layout">
//       <MyHeader />
//       <MyContent />
//       <MyFooter />
//     </Layout>
//   </IntlProvider>
// )

export default App
