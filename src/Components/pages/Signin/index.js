import React from 'react'
import { Formik } from 'formik'
import { func, bool, object } from 'prop-types'
import * as Yup from 'yup'
import {
  TextField,
  Button,
  Typography,
  CircularProgress,
} from '@material-ui/core'
import useStyles from './styles'

const Signin = ({ isLoadingAction, signinItem, doSignin }) => {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <Typography variant="h4" gutterBottom align="center" color="primary">
        Sign in
      </Typography>
      <Formik
        initialValues={signinItem.toJS()}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .required('Please input your email')
            .email('Invalid email'),
          password: Yup.string()
            .required('Please input password')
            .min(6, 'Password must have atleast 6 character'),
        })}
        onSubmit={values => doSignin(values)}
        render={({
          values,
          errors,
          handleBlur,
          handleChange,
          touched,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <TextField
              id="email"
              required
              className={classes.textField}
              fullWidth
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              label="Email"
              error={touched.email && Boolean(errors.email)}
              helperText={touched.email && errors.email}
              placeholder="email"
              variant="outlined"
            />
            <TextField
              id="password"
              required
              fullWidth
              value={values.password}
              className={classes.textField}
              onChange={handleChange}
              onBlur={handleBlur}
              label="Password"
              type="password"
              error={touched.password && Boolean(errors.password)}
              helperText={touched.password && errors.password}
              placeholder="Password"
              variant="outlined"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              disabled={isLoadingAction}
              // disabled
            >
              {isLoadingAction ? <CircularProgress size={28} /> : 'Sign in'}
            </Button>
          </form>
        )}
      />
    </div>
  )
}

Signin.propTypes = {
  isLoadingAction: bool.isRequired,
  signinItem: object.isRequired,
  doSignin: func.isRequired,
}

export default Signin
