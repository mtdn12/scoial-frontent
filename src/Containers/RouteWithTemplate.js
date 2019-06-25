import React from 'react'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import { Redirect, Route } from 'react-router-dom'
import Template from 'Components/templates/Template'
import isRedirect from 'Utils/checkRole'

const RouteWithTemplate = ({
  component: Component,
  userData,
  prevent,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={({ location, ...props }) => {
        // Check if login or it is a public route
        return (
          // Check if need Redirect or not
          <Template>
            {isRedirect(userData, prevent) ? (
              <Redirect to={isRedirect(userData, prevent)} />
            ) : (
              ''
            )}
            <Component location={location} {...props} />
          </Template>
        )
      }}
    />
  )
}

RouteWithTemplate.propTypes = {
  component: PropTypes.any.isRequired,
  userData: PropTypes.object,
  prevent: PropTypes.object,
}

const mapStateToProps = state => {
  return {
    userData: state.auth.get('userData'),
  }
}

export default connect(mapStateToProps)(RouteWithTemplate)
