import React from 'react'
import { addLocaleData, IntlProvider } from 'react-intl'
import localeEN from 'react-intl/locale-data/en'
import localeVI from 'react-intl/locale-data/vi'
import { Helmet } from 'react-helmet'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'antd/dist/antd.css'

import messagesEN from './translations/en.json'
import messagesVI from './translations/vi.json'
import MyHomePage from './components/MyHomePage'
import MyNotFoundPage from './components/MyNotFoundPage'

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
    <Helmet>
      <meta charSet="utf-8" />
      <title>My Title</title>
      <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
    <IntlProvider locale={language} messages={messages[language]}>
      <Switch>
        <Route exact path="/" component={MyHomePage} />
        <Route path="*" component={MyNotFoundPage} />
      </Switch>
    </IntlProvider>
  </Router>
)

export default App
