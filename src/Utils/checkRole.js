const isRedirect = (userData, prevent) => {
  if (!prevent) return false
  if (!userData && prevent.public) return '/signin'
  if (userData && prevent.auth) return '/'
  return false
}
export default isRedirect
