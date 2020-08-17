import React from 'react'
import { addLocaleData, IntlProvider, FormattedMessage } from 'react-intl'
import localeEN from 'react-intl/locale-data/en'
import localeVI from 'react-intl/locale-data/vi'
import { Helmet } from 'react-helmet'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'antd/dist/antd.css'

import messagesEN from './translations/en.json'
import messagesVI from './translations/vi.json'
import MyHomePage from './components/MyHomePage'
import avatar from './assets/avatar.jpg'
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
    <IntlProvider locale={language} messages={messages[language]}>
      <>
        <FormattedMessage id="app.myhelmet.title" defaultMessage="app.myhelmet.title">
          {title => (
            <Helmet>
              {/* HTML Meta Tags */}
              <title>{title}</title>
              <meta
                name="description"
                content={
                  <FormattedMessage
                    id="app.myhelmet.description"
                    defaultMessage="app.myhelmet.description"
                  />
                }
              />

              {/* Google / Search Engine Tags */}
              <meta
                itemProp="name"
                content={
                  <FormattedMessage id="app.myhelmet.title" defaultMessage="app.myhelmet.title" />
                }
              />
              <meta
                itemProp="description"
                content={
                  <FormattedMessage
                    id="app.myhelmet.description"
                    defaultMessage="app.myhelmet.description"
                  />
                }
              />
              <meta itemProp="image" content={avatar} />

              {/* Facebook Meta Tags */}
              <meta property="og:url" content="https://focused-cray-5d2879.netlify.app" />
              <meta property="og:type" content="website" />
              <meta
                property="og:title"
                content={
                  <FormattedMessage id="app.myhelmet.title" defaultMessage="app.myhelmet.title" />
                }
              />
              <meta
                property="og:description"
                content={
                  <FormattedMessage
                    id="app.myhelmet.description"
                    defaultMessage="app.myhelmet.description"
                  />
                }
              />
              <meta property="og:image" content={avatar} />

              {/* Twitter Meta Tags */}
              <meta name="twitter:card" content="summary_large_image" />
              <meta
                name="twitter:title"
                content={
                  <FormattedMessage id="app.myhelmet.title" defaultMessage="app.myhelmet.title" />
                }
              />
              <meta
                name="twitter:description"
                content={
                  <FormattedMessage
                    id="app.myhelmet.description"
                    defaultMessage="app.myhelmet.description"
                  />
                }
              />
              <meta name="twitter:image" content={avatar} />
            </Helmet>
          )}
        </FormattedMessage>
        <Switch>
          <Route exact path="/" component={MyHomePage} />
          <Route path="*" component={MyNotFoundPage} />
        </Switch>
      </>
    </IntlProvider>
  </Router>
)

export default App
