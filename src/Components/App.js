import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { CssBaseline } from '@material-ui/core'
import { MuiThemeProvider } from '@material-ui/core/styles'
import RouteWithTemplate from '../Containers/RouteWithTemplate'
import ErrorBoundary from './pages/ErrorBoundary'
import * as routes from './routes'
import theme from '../Theme'

const App = () => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <ErrorBoundary>
      <Switch>
        <RouteWithTemplate
          path="/signin"
          component={routes.AsyncLogin}
          prevent={{ auth: true }}
        />
        <RouteWithTemplate
          path="/signup"
          component={routes.AsyncSignup}
          prevent={{ auth: true }}
        />
        <RouteWithTemplate exact path="/" component={routes.AsyncHomePage} />
        <RouteWithTemplate
          path="/product"
          exact
          prevent={{ public: true }}
          component={routes.AsyncProduct}
        />
        <RouteWithTemplate
          path="/profile/:id"
          exact
          prevent={{ public: true }}
          component={routes.AsyncProfile}
        />
        <RouteWithTemplate
          path="/product/create"
          exact
          component={routes.AsyncCreateEditProduct}
        />
        <RouteWithTemplate
          path="/product/edit/:id"
          exact
          component={routes.AsyncCreateEditProduct}
        />
        {/* <Route path="/loading" component={routes.AsyncLoading} /> */}
        <Route component={routes.AsyncNotFound} />
      </Switch>
    </ErrorBoundary>
  </MuiThemeProvider>
)

export default App
