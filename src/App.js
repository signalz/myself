import React from 'react'
import { addLocaleData, IntlProvider } from 'react-intl'
import localeEN from 'react-intl/locale-data/en'
import localeVI from 'react-intl/locale-data/vi'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'antd/dist/antd.css'

import messagesEN from './translations/en.json'
import messagesVI from './translations/vi.json'
import MyHomePage from './components/MyHomePage'
import MyHelmet from './components/MyHelmet'
import MyNotFoundPage from './components/MyNotFoundPage'
import MyPicturesPage from './components/MyPicturesPage'

import './App.scss'

// setup react intl
addLocaleData([...localeEN, ...localeVI])
const language = navigator.language.split(/[-_]/)[0]
const messages = {
  vi: messagesVI,
  en: messagesEN,
}

const App = () => (
  <Router>
    <IntlProvider locale={language} messages={messages[language]}>
      <>
        <MyHelmet />
        <Switch>
          <Route exact path="/" component={MyHomePage} />
          <Route exact path="/pics" component={MyPicturesPage} />
          <Route path="*" component={MyNotFoundPage} />
        </Switch>
      </>
    </IntlProvider>
  </Router>
)

export default App
