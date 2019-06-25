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

const Signup = ({ isLoadingAction, signupItem, doSignup }) => {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <Typography variant="h4" gutterBottom align="center" color="primary">
        Sign up
      </Typography>
      <Formik
        initialValues={signupItem.toJS()}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .required('Please input your email')
            .email('Invalid email'),
          name: Yup.string().required('Please input your name'),
          password: Yup.string()
            .required('Please input password')
            .min(6, 'Password must have atleast 6 character'),
          confirmPassword: Yup.string()
            .required('Please input confirm password')
            .oneOf([Yup.ref('password')], 'Password must match'),
        })}
        onSubmit={values => doSignup(values)}
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
              id="name"
              required
              className={classes.textField}
              fullWidth
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              label="Name"
              error={touched.name && Boolean(errors.name)}
              helperText={touched.name && errors.name}
              placeholder="name"
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
              error={touched.password && Boolean(errors.password)}
              helperText={touched.password && errors.password}
              placeholder="Password"
              variant="outlined"
            />
            <TextField
              id="confirmPassword"
              required
              fullWidth
              value={values.confirmPassword}
              className={classes.textField}
              onChange={handleChange}
              onBlur={handleBlur}
              label="confirm Password"
              error={touched.confirmPassword && Boolean(errors.confirmPassword)}
              helperText={touched.confirmPassword && errors.confirmPassword}
              placeholder="confirm Password"
              variant="outlined"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              disabled={isLoadingAction}>
              {isLoadingAction ? <CircularProgress size={28} /> : 'Sign up'}
            </Button>
            {isLoadingAction && (
              <CircularProgress size={32} className={classes.loadingItem} />
            )}
          </form>
        )}
      />
    </div>
  )
}

Signup.propTypes = {
  isLoadingAction: bool.isRequired,
  signupItem: object.isRequired,
  doSignup: func.isRequired,
}

export default Signup
