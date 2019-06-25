import React from 'react'
import PropTypes from 'prop-types'
import AppBar from 'Containers/AppBar'
import Notification from 'Containers/Notification'
import useStyles from './styles'
import Modal from 'Containers/ModalManager'

const AuthTemplate = ({ children }) => {
  const classes = useStyles()
  return (
    <div className={classes.wrapper}>
      <AppBar />
      <main className={classes.contentWrapper}>{children}</main>
      <Notification />
      <Modal />
    </div>
  )
}

AuthTemplate.propTypes = {
  children: PropTypes.node,
}

export default AuthTemplate
