import apiClient from './'

const signupRequest = values => apiClient.post('/signup', values)

const signinRequest = values => apiClient.post('/signin', values)

export const AuthService = {
  signupRequest,
  signinRequest,
}
